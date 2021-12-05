var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}
recognition.onresult = function  (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    speak()
}
function speak(){
 var synth = window.speechSynthesis
 speak_data=document.getElementById("textbox").innerHTML
 var utter = new SpeechSynthesisUtterance()  
 synth.speak(utter)
 Webcam.attach(camera)
 takemyselfie()
 save()
}
camera=document.getElementById("camera")
Webcam.set({
    width:360,height:360,image_format:'jpeg',jpeg_quality:90
})
function takemyselfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    })
} 
function save(){
    link=document.getElementById("link")
    image=document.getElementById("selfie_image").src
link.href=image
link.click()
}