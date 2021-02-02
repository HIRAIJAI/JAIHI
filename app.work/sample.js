
function recognition(){   
    var recognition = new webkitSpeechRecognition();
    recognition.start();
    recognition.addEventListener('result', function (e) {
        var rec = e.results.item(0).item(0).transcript;
        document.getElementById("fortune").innerHTML = rec;
                
    });
}    
const results = [
                '今日のあなたは、Excellent !です。',
                '今日のあなたは、Excellent !です。',
                '今日のあなたは、Excellent !です。',
                '今日のあなたは、Great day!です。',
                '今日のあなたは、Great day!です。',
                '今日のあなたは、Good day!です。',
                '今日のあなたは、Normal dayです。',
                '今日のあなたは、Not so nice dayです。',
                '今日のあなたは、Unlucky dayです。'
                 ]
        
function draw() {                 
            const key = Math.floor(Math.random()* results.length)
            console.log(key)
            const box = document.getElementById ("box")
            box.textContent = results[key]
}
  
  const text     = document.querySelector('#text')
  const speakBtn = document.querySelector('#speak-btn')
  speakBtn.addEventListener('click', function() {
  const uttr = new SpeechSynthesisUtterance(text.value)
  speechSynthesis.speak(uttr)
  })  
  speakBtn.addEventListener('click',() => {
      if (!window.speechSynthesis) return;
      let u = new SpeechSynthesisUtterance('......これが今日のあなたの運勢です .....　占ってみました')
      u.lang ="ja-Ja";
      speechSynthesis.speak(u);
  });  
