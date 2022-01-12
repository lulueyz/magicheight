var answers = ["Oui!", "C'est une certitude", "Je n'en doute pas", "il faut persévérer", "ca va etre dure", 
                "Non!", "Va te faire cuire un oeuf ça vaudra mieux!", "Tu peux toujours courir!"];
    
   window.onload = function() {
       var eight = document.getElementById("eight");
       var answer = document.getElementById("answer");
       var eightball = document.getElementById("eight-ball");
       var question = document.getElementById("question");
       
       //eight-ball (définir quel élément est le déclencheur)
       eightball.addEventListener("click", function() {
         if (question.value.length < 1) {
           alert('Enter a question!');
         } else {
           eight.innerText = "";
           var num = Math.floor(Math.random() * Math.floor(answers.length));
           answer.innerText = answers[num];
         }
       });
    }; 