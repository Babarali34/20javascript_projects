var result= document.getElementById('result')


function startConverting (){
   
    if('webkitSpeechRecognition' in window){
       var speechRecognizer = new webkitSpeechRecognition()
        speechRecognizer.continuous = true;
        speechRecognizer.interimResults = true;
        speechRecognizer.lang = 'en-US';
       speechRecognizer.start()

       var finalTranscript = ''

       speechRecognizer.onresult = function(event) {
           var interTranscript  = ''

           for( var  i = event.resultIndex; i < event.results.length; i++){
              
             var transcript = event.results[i][0].transcript;
              transcript.replace("\n","<br>")

                if(event.results[i].isFinal){
                  finalTranscript += transcript;
                }else{
                  interTranscript += transcript;
                }
           }

               result.innerHTML = finalTranscript + interTranscript;
       }

    }
}


































// var result = document.getElementById('result');
  
// 		function startConverting () {

// 		if('webkitSpeechRecognition' in window) {
// 			var speechRecognizer = new webkitSpeechRecognition();
// 			speechRecognizer.continuous = true;
// 			speechRecognizer.interimResults = true;
// 			speechRecognizer.lang = 'en-US';
// 			speechRecognizer.start();

// 			var finalTranscripts = '';

// 			speechRecognizer.onresult = function(event) {
// 				var interimTranscripts = '';
// 				for(var i = event.resultIndex; i < event.results.length; i++){
// 					var transcript = event.results[i][0].transcript;
// 					transcript.replace("\n", "<br>");
// 					if(event.results[i].isFinal) {
// 						finalTranscripts += transcript;
// 					}else{
// 						interimTranscripts += transcript;
// 					}
// 				}
// 				result.innerHTML = finalTranscripts + '<span style="color: #999">' + interimTranscripts + '</span>';
// 			};
// 			speechRecognizer.onerror = function (event) {

// 			};
// 		}else {
// 			result.innerHTML = 'Your browser is not supported. Please download Google chrome or Update your Google chrome!!';
// 		}	
// 		}