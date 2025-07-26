function chooseFace(rolled){
  switch(rolled){
    case 0:
      return "&#9856;";
    case 1:
      return "&#9857;";
    case 2:
      return "&#9858;";
    case 3:
      return "&#9859;";
    case 4:
      return "&#9860;";
    case 5:
      return "&#9861;";
    default:
      return "";
  }
}
const resultFace = document.getElementById(".dice");
const resultValue = document.getElementById(".number");
let historyListRolled = [];
//const historyListDiv = [];
const historyView = document.getElementById(".history");

function randomDice(){
  const rolled = Math.floor(Math.random() * 6);
  const diceFace = chooseFace(rolled);

  console.log(rolled+1);
  
  document.querySelector("#dice").innerHTML = diceFace;  
  history(rolled,diceFace);
  document.getElementById("res").style.display = "flex";
}

function history(rolled,diceFace){
  historyListRolled.push({rolled,diceFace});

  let historyDivHTML = '';

  for(let i=0;i<historyListRolled.length;i++){

    const newElement = `<div class=list><h2>Roll ${i+1}</h2>
      <div class="history-dice">${historyListRolled[i].diceFace}</div></div>`;
    console.log(newElement);
    //historyView.appendChild(newElement);
    historyDivHTML += newElement;
    
  }
  document.querySelector(".history").innerHTML = historyDivHTML;
}

function restartDice(){
  document.querySelector(".history").innerHTML = "";
  historyListRolled = [];
  document.getElementById("res").style.display = "none";
}

 
