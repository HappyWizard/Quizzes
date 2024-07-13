const dramaArray =[
      {
            name:'tale of the nine tailed',
            source: '01.jpg',
      },
      {
            name:'the penthouse: war in life',
            source:'02.jpg',
      },
      {
            name:'w-two worlds',
            source:'03.jpg',
      },
      {
            name:'her private life',
            source:'04.jpg',
      },
      {
            name:'twenty five twenty one',
            source:'05.jpg',
      },
      {
            name:'tomorrow',
            source:'06.png',
      },
      {
            name:'while you were sleeping',
            source:'07.jpg',
      },
      {
            name:'run on',
            source:'08.jpg',
      },
      {
            name:'flower of evil',
            source:'09.jpg',
      },
      {
            name:'7 first kisses',
            source:'10.jpg',
      },
      {
            name:'lovestruck in the city',
            source:'11.jpg',
      },
      {
            name:'healer',
            source:'12.png',
      },
      {
            name:'crash landing on you',
            source:'13.jpg',
      },
      {
            name:'forecasting love and weather',
            source:'14.jpeg',
      },
      {
            name:'lovers of the red sky',
            source:'15.jpg',
      },
      {
            name:'suspicious partner',
            source:'16.jpg',
      },
      {
            name:'hotel del luna',
            source:'17.jpeg',
      },
      {
            name:'the red sleeve',
            source:'18.jpg',
      },
      {
            name:'my id is gangnam beauty',
            source:'19.jpeg',
      },
      {
            name:'guardian: the lonely and great god',
            source:'20.jpg',
      },
      {
            name:'memories of alhambra',
            source:'21.jpg',
      },
      {
            name:'reborn rich',
            source:'22.png',
      },
      {
            name:"it's okay to not be okay",
            source:'23.jpeg',
      },
      {
            name:'legend of the blue sea',
            source:'24.jpg',
      },
      {
            name:'rookie historian goo hae-ryung',
            source:'25.jpg',
      },
      {
            name:'oh my ghost',
            source:'26.jpg',
      },
      {
            name:'business proposal',
            source:'27.jpg',
      },
      {
            name:'are you human too?',
            source:'28.jpg',
      },
      {
            name:'something in the rain',
            source:'29.png',
      },
      {
            name:'dr. romantic',
            source:'30.jpg',
      },
      {
            name:'moving',
            source:'31.jpg',
      },
      {
            name:'tale of the nine tailed 1938',
            source:'32.jpg',
      },
      {
            name:'18 again',
            source:'33.jpg',
      },
      {
            name:'good job',
            source:'34.jpg',
      },
      {
            name:'sisyphus: the myth',
            source:'35.jpg',
      },
      {
            name:'destined with you',
            source:'36.jpeg',
      },
      {
            name:'she would never know',
            source:'37.jpg',
      },
      {
            name:'welcome to waikiki',
            source:'38.jpeg',
      },
      {
            name:'moon lovers: scarlet heart ryeo',
            source:'39.jpg',
      },
      {
            name:'shooting stars',
            source:'40.jpg',
      },
      {
            name:'bo-ra! deborah',
            source:'41.jpg',
      },
      {
            name:'the bride of habaek',
            source:'42.jpg',
      },
      {
            name:'hometown cha-cha-cha',
            source:'43.jpg',
      },
      {
            name:'mouse',
            source:'44.jpeg',
      },
      {
            name:'fight for my way',
            source:'45.jpg',
      },
      {
            name:'delightfully deceitful',
            source:'46.jpg',
      },
      {
            name:'doctor cha',
            source:'47.jpeg',
      },
      {
            name:'hospital playlist',
            source:'48.jpg',
      },
      {
            name:'big mouth',
            source:'49.jpeg',
      },
      {
            name:'extraordinary attorney woo',
            source:'50.jpeg',
      },
      {
            name:'doom at your service',
            source:'51.jpg',
      },
      {
            name:'weightlifting fairy kim bok-joo',
            source:'52.jpg',
      },
      {
            name:'the king: eternal monarch',
            source:'53.jpg',
      },
      {
            name:'the uncanny counter',
            source:'54.jpg',
      },
      {
            name:'happiness',
            source:'55.jpeg',
      },
      {
            name:'the glory',
            source:'56.jpg',
      },
      {
            name:'king the land',
            source:'57.jpg',
      },
      {
            name:'crash course in romance',
            source:'58.jpg',
      },
      {
            name:'alchemy of souls',
            source:'59.jpeg',
      },
      {
            name:'now, we are breaking up',
            source:'60.jpeg',
      },
      {
            name:'nevertheless',
            source:'61.jpg',
      },
      {
            name:'itaewon class',
            source:'62.jpg',
      },
      {
            name:'vincenzo',
            source:'63.jpg',
      },
      {
            name:'search: www',
            source:'64.jpg',
      },
      {
            name:'my name',
            source:'65.jpg',
      },
      {
            name:'behind your touch',
            source:'66.jpg',
      },
      {
            name:'strong woman do bong soon',
            source:'67.jpeg',
      },
      {
            name:'celebrity',
            source:'68.jpg',
      },
      {
            name:'the world of the married',
            source:'69.jpg',
      },
      {
            name:'see you in my 19th life',
            source:'70.jpeg',
      },
      {
            name:"it's okay, that's love",
            source:'71.jpg',
      },
      {
            name:"the king's affection",
            source:'72.jpg',
      },
      {
            name:'thirty-nine',
            source:'73.jpg',
      },
      {
            name:"what's wrong with secretary kim",
            source:'74.gif',
      },
      {
            name:'mr. queen',
            source:'75.jpg',
      },
      {
            name:"agency",
            source:'76.jpg',
      },
      {
            name:'the k2',
            source:'77.jpg',
      }
];

dramaArray.sort(() => 0.5 - Math.random());
console.log(dramaArray);

let questionContainer = document.querySelector('.question-container');
let nextButton = document.querySelector('.next-button');
let hintButton = document.querySelector('.hint-button');
let newPoster = document.createElement("img");

let i = 0;
let questionsAnswered = 0;
let totalQuestions = dramaArray.length;
let questionsWronglyAnswered = 0;
let inputCorrect = false;
let gameContinues = true;

let inputField = document.querySelector(".user-typing-space");
document.querySelector('.score').textContent += `/${totalQuestions}`;
// Add event listener for focus (when input is clicked)
inputField.addEventListener("focus", function() {
    // Clear the placeholder text
    inputField.placeholder = "";
});

// Add event listener for blur (when input loses focus)
inputField.addEventListener("blur", function() {
    // Restore the placeholder text
    inputField.placeholder = "Enter text here";
});
// Add an event listener for the Enter key press on the input field
document.querySelector('.user-typing-space').addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
          goNext();
      }
  });
document.querySelector('.user-typing-space').addEventListener('click', function() {document.querySelector('.user-typing-space').value = ""});
let goodbye = document.querySelector(".goodbye-container");
let hint = document.querySelector(".hints-container");
let failure = document.querySelector(".failure-container");
let shock = document.querySelector(".shock-container");

document.addEventListener("DOMContentLoaded", function() {
      window.onclick = function(event) {
            // console.log("Entered the function");
            if (event.target == goodbye || event.target == hint || event.target == failure || event.target == shock ) {
              goodbye.style.display = "none";
              hint.style.display = "none";
              failure.style.display = "none";
              shock.style.display = "none";
            }
      }
});
(function(){
      nextButton.addEventListener('click', goNext);
      hintButton.addEventListener('click', function(){
            document.querySelector(".question").textContent = 'Game continues...try again';
            document.querySelector(".question").style.color = 'purple';
            inputCorrect = false;
            gameContinues = true;
            questionsWronglyAnswered = 0;
            hint.style.display = "flex";
      });
      
      // console.log(dramaArray[i]);
      console.log(dramaArray[i]['name']);
      // console.log(dramaArray[i]['source']);

      newPoster.setAttribute("src","posters/" + dramaArray[i]["source"]);
      newPoster.style.order = "-1";
      newPoster.style.width = "100%";
      newPoster.style.height = "500px";
      newPoster.style.objectFit = "contain";
      questionContainer.appendChild(newPoster);
      
}());
function goNext(){
      document.querySelector(".question").textContent = 'What is the name of this drama?';
      document.querySelector(".question").style.color = 'black';
      checkAnswer();
      
      if (inputCorrect == true && gameContinues == true){
            if (i >= totalQuestions){
                  goodbye.style.display = "flex";
                  console.log("No more questions available");
                  return
            }
            // console.log(dramaArray[i]);
            console.log(dramaArray[i]['name']);
            // console.log(dramaArray[i]['source']);
            newPoster.remove();
            newPoster.setAttribute("src","posters/" + dramaArray[i]["source"]);
            newPoster.style.order = "-1";
            newPoster.style.width = "100%";
            newPoster.style.height = "500px";
            newPoster.style.objectFit = "contain";
            questionContainer.appendChild(newPoster);
            document.querySelector('.user-typing-space').value = "";
      
            // console.log(`go Next function executed!`);
            inputCorrect = false;
      }    
}
function checkAnswer(){
      if (i >= totalQuestions || gameContinues == false){
            return
      }
      let getAnswer = document.querySelector('.user-typing-space').value;
      console.log("Checking answer~");
      console.log(getAnswer.toLowerCase());
      console.log(dramaArray[i]["name"]);
      if (getAnswer.toLowerCase() === dramaArray[i]["name"]){
            if(dramaArray[i]["name"] === "rookie historian goo hae-ryung"){
                  shock.style.display = "flex";  
            }
            i++;
            questionsWronglyAnswered = 0;
            questionsAnswered++;
            document.querySelector(".score").textContent = `Your Score: ${questionsAnswered}/${totalQuestions}`;
            console.log("Correct!");
            inputCorrect = true;
      }else{
            questionsWronglyAnswered++;
            document.querySelector(".question").textContent = 'Incorrect!';
            document.querySelector(".question").style.color = 'red';
            console.log("Incorrect Answer!");
            console.log("Checking answer~");
            console.log(getAnswer.toLowerCase());
            console.log(dramaArray[i]["name"]);
            inputCorrect = false;
            if (questionsWronglyAnswered == 3){
                  console.log("Game over");
                  gameContinues = false;
                  failure.style.display = "flex";
            }
      }
}