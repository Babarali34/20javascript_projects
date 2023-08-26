const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition 

const recognitation = new speechRecognition()

 window.onload  = ()=>{
  recognitation.start()
 }


 recognitation.onresult = (event)=>{
       const command = event.results[0][0].transcript;
       if(command === "how are you"){
          document.querySelector('h1').innerHTML = "I am fine"
       }else if( command === "make body black"){
        document.querySelector('body').style.background="#111"
        document.querySelector('body').style.color="#fff"

       }
       else if( command === "make body blue"){
        document.querySelector('body').style.background="blue"
        document.querySelector('body').style.color="#fff"

       }
       else if( command === "make body green"){
        document.querySelector('body').style.background="green"
        document.querySelector('body').style.color="#fff"

       }else if( command === "open"){
         window.open('https://www.youtube.com/')
       }
       
 }

 recognitation.onend = ()=>{
   recognitation.start()
 }