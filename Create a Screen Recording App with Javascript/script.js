const startButton =  document.getElementById('starButton')
const stopButton =  document.getElementById('stopButton')
const recoredVideo =  document.getElementById('recoredVideo')

let mediaRecorded ;
let recoredChunks = []

async function startRecording (){
   try{
          const stream = await navigator.mediaDevices.getDisplayMedia({video:true})
          mediaRecorded = new  MediaRecorder(stream)
           mediaRecorded.ondataavailable = event =>{
                if(event.data.size > 0){
                   recoredChunks.push(event.data)
                }

           }

         mediaRecorded.onstop  = ()=>{
           const blob = new Blob (recoredChunks, {type: 'video/webm'})
           recoredVideo.src = URL.createObjectURL(blob)
         }

         startButton.disabled = true;
         stopButton.disabled = false
         mediaRecorded.start()


   }catch(eror){
           console.log("eror is ");
   }
}


function stopRecording(){
    if(mediaRecorded.state === 'recording'){
       mediaRecorded.stop()
       startButton.disabled = false
       stopButton.disabled = true
       recoredChunks = []
    }
}


startButton.addEventListener('click', startRecording)
stopButton.addEventListener('click', stopRecording)