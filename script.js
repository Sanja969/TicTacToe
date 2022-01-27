let h=0;
let count=0;
let sw=0;

report = document.querySelector(".report");
board = document.querySelector(".gameBoard");
playAgain = document.querySelector(".playAgain");
manu = document.querySelector(".manu");
person1 = document.querySelector("#person1");
person2 = document.querySelector("#person2");
computer1 = document.querySelector("#computer1");
computer2 = document.querySelector("#computer2");
marker1=document.querySelector('#marker1');
marker2 = document.querySelector("#marker2");
player1Name=document.querySelector('#player1Name');
player2Name = document.querySelector("#player2Name");

playAgainFun=()=>{
   manu.style.display = "block";
  report.textContent = "I'm waiting for winner?";
  board.innerHTML = "";
}

gameBoardTable = () => {
  playAgain.style.display ='none';
  board.innerHTML = "";
  
  report.textContent = "I'm waiting for winner?";
    h=0;
    sw=1;
    count = 0;
 
  manu.style.display = "none";


  
  field = [];
  for (let i = 0; i < 9; i++) {
    field[i] = document.createElement("button");
    field[i].classList.add("field" + i);
    board.appendChild(field[i]);
    field[i].style.width = "200px";
    field[i].style.height = "200px";
    field[i].style.border = "2px solid white";
    field[i].style.display = "inline-table";
    field[i].style.verticalAlign = "top";
    field[i].style.backgroundColor = "rgb(20,20,20)";
    field[i].style.color = "white";
    field[i].style.fontSize = "48px";
    field[i].style.boxSizing = "border-box";
  }
    
 const player1 = new Player(player1Name.value, marker1.value);
 const player2 = new Player(player2Name.value, marker2.value);

    if (person1.checked && person2.checked) {
      
        twoPlayer(field,player1,player2);
    } 
    
    else if ((person1.checked && computer2.checked) ||
    (person2.checked && computer1.checked)){
    
      if (person2.checked){
      
        h=1;
            field[Math.floor(Math.random()*9)].textContent=marker1.value;
            computer_player(field, player2, player1);
      }
      else{
          computer_player(field, player1, player2);
      }
      
    } 
    else{
        alert('You can\'t choose two computers.');
       playAgain.style.display = "block";
    }
}

function twoPlayer(field,player1,player2){
  for (let i = 0; i < 9; i++) {
    field[i].addEventListener("click", function () {
      switch (sw) {
        case 1:
          player1.play(field, i);
          sw = 2;
          break;
        case 2:
          player2.play(field, i);
          sw = 1;
          break;
      }
    });
  }
}

function computer_player(field,player1,player2){
  
    for (let i = 0; i < 9; i++) {
      field[i].addEventListener("click", function () {
        if (field[i].textContent !== "") {
          return;
        }

        count++;
        if (player1.play(field, i) == false) {
          
          if (count >= 5) {
            return;
          }
          player2.play(field, compLogic(field));

        }
        console.log(count);
        return count;
      });
    }
    
}
function Player(name,marker){
  this.name=name;
  this.marker=marker;
  this.play=function(field,i){
    if (field[i].textContent === "") {
      field[i].textContent = marker;
      if (winning(field, i, name + " won the game!") == true) {
        return true;
      }
    }
    return false;
   }
 }

let winningBox = (a, b, c, x) => {
  a.style.color = "green";
  b.style.color = "green";
  c.style.color = "green";
  report.textContent = x.toUpperCase();
  
  for (let j = 0; j < 9; j++) {
    field[j].disabled = true;
  }
  playAgain.style.display = "block";
  return true;
};
let winning = (field, i, x) => {
  if (field[i].textContent != "") {
    if (
      field[8].textContent == field[4].textContent &&
      field[4].textContent == field[0].textContent &&
      field[4].textContent == field[i].textContent
    ) {
      winningBox(field[0], field[4], field[8], x);
      return true;
    } else if (
      field[6].textContent == field[4].textContent &&
      field[4].textContent == field[2].textContent &&
      field[4].textContent == field[i].textContent
    ) {
      winningBox(field[2], field[4], field[6], x);
      return true;
    } else if (i < 3) {
      if (
        field[0].textContent == field[1].textContent &&
        field[0].textContent == field[2].textContent &&
        field[0].textContent == field[i].textContent
      ) {
        winningBox(field[0], field[1], field[2], x);
        return true;
      } else if (
        field[i].textContent == field[i + 3].textContent &&
        field[i].textContent == field[i + 6].textContent
      ) {
        winningBox(field[i], field[i + 3], field[i + 6], x);
        return true;
      }
    } else if (i > 2 && i < 6) {
      if (
        field[3].textContent == field[4].textContent &&
        field[3].textContent == field[5].textContent &&
        field[3].textContent == field[i].textContent
      ) {
        winningBox(field[3], field[4], field[5], x);
        return true;
      } else if (
        field[i].textContent == field[i + 3].textContent &&
        field[i].textContent == field[i - 3].textContent
      ) {
        winningBox(field[i], field[i + 3], field[i - 3], x);
        return true;
      }
    } else {
      if (
        field[6].textContent == field[7].textContent &&
        field[6].textContent == field[8].textContent &&
        field[6].textContent == field[i].textContent
      ) {
        winningBox(field[6], field[7], field[8], x);
        return true;
      } else if (
        field[i].textContent == field[i - 3].textContent &&
        field[i].textContent == field[i - 6].textContent
      ) {
        winningBox(field[i], field[i - 3], field[i - 6], x);
        return true;
      }
    }
  }

  h++;
  if (h == 9) {
    report.textContent = "Nobody wins!";
    playAgain.style.display = "block";
  }

  return false;
};



compLogic=(field)=>{
 
  let r = Math.floor(Math.random() * 9);
  while (field[r].textContent !== "") {
    console.log("while");
    r = Math.floor(Math.random() * 9);
  }
  


  if (field[8].textContent == field[4].textContent && 
    field[4].textConten!='') {
    if (field[0].textContent == "") {
      r = 0;
      return r;
    }
  } else if (
    field[4].textContent == field[0].textContent &&
    field[0].textConten != ""
  ) {
    if (field[8].textContent == "") {
      r = 8;
      return r;
    }
  } else if (
    field[6].textContent == field[4].textContent &&
    field[4].textConten != ""
  ) {
    if (field[2].textContent == "") {
      r = 2;
      return r;
    }
  } else if (
    field[4].textContent == field[2].textContent &&
    field[2].textConten != ""
  ) {
    if (field[6].textContent == "") {
      r = 6;
      return r;
    }
  }
  if (
    field[6].textContent == field[7].textContent &&
    field[7].textConten != ""
  ) {
    if (field[8].textContent == "") {
      r = 8;
      return r;
    }
  } else if (
    field[7].textContent == field[8].textContent &&
    field[8].textConten != ""
  ) {
    if (field[6].textContent == "") {
      r = 6;
      return r;
    }
  }

  if (
    field[3].textContent == field[4].textContent &&
    field[4].textConten != ""
  ) {
    if (field[5].textContent == "") {
      r = 5;
      return r;
    }
  } else if (
    field[4].textContent == field[5].textContent &&
    field[5].textConten != ""
  ) {
    if (field[3].textContent == "") {
      r = 3;
      return r;
    }
  }
  if (
    field[0].textContent == field[1].textContent &&
    field[1].textConten != ""
  ) {
    if (field[2].textContent == "") {
      r = 2;
      return r;
    }
  } else if (
    field[2].textContent == field[1].textContent &&
    field[1].textConten != ""
  ) {
    if (field[0].textContent == "") {
      r = 0;
      return r;
    }
  }
  
 
    for (let i = 0; i < 3; i++) {
      if (
        field[i].textContent == field[i + 3].textContent &&
        field[i].textConten != ""
      ) {
        if (field[i + 6].textContent == "") {
          r = i + 6;
          return r;
        }
      } else if (
        field[i + 6].textContent == field[i + 3].textContent &&
        field[i+3].textConten != ""
      ) {
        if (field[i].textContent == "") {
          r = i;
          return r;
        }
      }
    }
   
  
  
    

    for (let i = 3; i < 6; i++) {
      if (
        field[i].textContent == field[i + 3].textContent &&
        field[i].textConten != ""
      ) {
        if (field[i - 3].textContent == "") {
          r = i - 3;
          return r;
        }
      } else if (
        field[i - 3].textContent == field[i].textContent &&
        field[i].textConten != ""
      ) {
        if (field[i + 3].textContent == "") {
          r = i + 3;
          return r;
        }
      }
    }
  
  

    for (let i = 6; i < 9; i++) {
      if (
        field[i].textContent == field[i - 3].textContent &&
        field[i].textConten != ""
      ) {
        if (field[i - 6].textContent == "") {
          r = i - 6;
          return r;
        }
      } else if (
        field[i - 3].textContent == field[i - 6].textContent &&
        field[i - 3].textConten != ""
      ) {
        if (field[i].textContent == "") {
          r = i;
          return r;
        }
      }
    }
  

  return r;
}
