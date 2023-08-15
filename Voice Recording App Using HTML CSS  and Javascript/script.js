const  startBtn = document.getElementById('startBtn')
const  stopBtn = document.getElementById('stopBtn')
const  audioPlayer = document.getElementById('audioPlayer')

let mediaRecorder;
let audioChunks = []

startBtn.addEventListener('click', startRecording)

stopBtn.addEventListener('click', stopRecording)


function startRecording(){
    navigator.mediaDevices.getUserMedia({audio:true})
    .then(stream=>{
        mediaRecorder = new MediaRecorder(stream)
        mediaRecorder.ondataavailable = event =>{
           if(event.data.size > 0){
             audioChunks.push(event.data)
           }
        }
        mediaRecorder.onstop = ()=>{
           const audioBlob = new Blob (audioChunks,{type:'audio/wav'})
           audioPlayer.src = URL.createObjectURL(audioBlob)
        }

         mediaRecorder.start()
         startBtn.disabled = true 
         stopBtn.disabled = false
    })
}


function stopRecording(){
   if(mediaRecorder.state  === 'recording'){
      mediaRecorder.stop()
      startBtn.disabled = false 
      stopBtn.disabled = true 
      
   }
}