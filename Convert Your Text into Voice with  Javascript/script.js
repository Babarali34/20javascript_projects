function textToAudio(){
   let msg = document.querySelector('.text').textContent;
   let speach = new SpeechSynthesisUtterance()
   speach.lang = "en-US"
   speach.text = msg
   speach.volume = 1
   speach.rate = 1
  speach.pitch = 1

   speechSynthesis.speak(speach)
 


}