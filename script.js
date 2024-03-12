





function check() {
    var score = document.getElementById("score").value

    if (score ==""){
        document.getElementById ('result').innerHTML='Invalid ❎'

    } else if (score > 0 && score < 40) {
        document.getElementById ("result").innerHTML='F-Fail 😢'
        var songFailure = new Audio('Audio/failure-steven-he-made-with-Voicemod.mp3')
        songFailure.play()
    } else if (score >= 40 && score < 44) {
        document.getElementById ('result') .innerHTML='E-Pass 👍'
    } else if (score >= 44 && score < 50) {
        document.getElementById('result').innerHTML='D-Fair 😏'
    } else if (score >= 50 && score < 60){
        document.getElementById('result').innerHTML='C-Good 😘'
    } else if (score >= 60 && score < 70){
        document.getElementById('result').innerHTML='B-Good 😍'
        var songFailure = new Audio('Audio/Clapping Sound Effects.mp3')
        songFailure.play()
    } else if (score >= 70 && score <=100){
        document.getElementById('result').innerHTML='A-Excellent ❤❤'
        var songFailure = new Audio('Audio/Right_Said_Fred_-_Stand_Up_For_The_Champions_Niggaloaded.com.ng.mp3')
        songFailure.play()
    } else if (score < 0) {
        document.getElementById('result').innerHTML='Null 🈴'
    } else if (score > 100) {
    document.getElementById ('result').innerHTML='Not-Found ❌'
    }
}