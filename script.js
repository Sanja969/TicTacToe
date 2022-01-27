let count = 0;
let h = 0;

report = document.querySelector(".report");
board = document.querySelector(".gameBoard");
newGameButton = document.querySelector(".newGame");
manu = document.querySelector(".manu");
person1 = document.querySelector("#person1");
person2 = document.querySelector("#person2");
computer1 = document.querySelector("#computer1");
computer2 = document.querySelector("#computer2");



newGame = () => {
  board.innerHTML = "";
  manu.style.display = "block";
  report.textContent = "I'm waiting for winner?";
}

gameBoardTable = () => {
    h=0;
    count=0;
 
  manu.style.display = "none";

  newGameButton.style.display = "none";
  
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
  
    if (person1.checked && person2.checked) {
        for (let i = 0; i < 9; i++) {
        personPlayers(field, i);
        }
    } 
    
    else if (person1.checked && computer2.checked) {
        for (let i = 0; i < 9; i++) {
        player_computer(field, i);
        }
    } 
    
    else if (person2.checked && computer1.checked) {
        field[Math.floor(Math.random() * 9)].textContent = "o";
        for (let i = 0; i < 9; i++) {
        computer_player(field, i);
        }
    }
    else{
        alert('You can\'t choose two computers.')
    }
  
}


let personPlayers = (field, i) => {
  field[i].addEventListener("click", function () {
    switch (count) {
      case 0:
        player(field, i, "x");
        count = 1;
        break;

      case 1:
        player(field, i, "o");
        count = 0;
        break;
    }
    return count;
  });
};
let player_computer = (field, i) => {
  field[i].addEventListener("click", function () {

            computer(field, i,"o");
        
       
        
        
          
   
  });
};
let computer_player = (field, i) => {
  

  field[i].addEventListener("click", function () {
    
     computer(field,i, "o");
   
  });

}

let player = (field, i, y) => {
  if (field[i].textContent === "") {
    field[i].textContent = y;
    if (
      winning(field, i, "Player '" + y.toUpperCase() + "' won the game!") ==
      true
    )
        {
            
            return true;
        }
      
  }

  return false;
}

let computer = (field, i,y) => {
    if(player(field, i,'x')===false){
        let r = Math.floor(Math.random() * 9);

        let j = 0;
        while (field[r].textContent !== "" && j < 10) {
        j++;
        r = Math.floor(Math.random() * 9);
        }
        if (field[r].textContent == "") {
        field[r].textContent = y;
        }

        winning(field, r, "Player '" + y.toUpperCase() + "' won the game!");
    }
        
            
    
    
    }
  

let winningBox = (a, b, c, x) => {
  a.style.color = "green";
  b.style.color = "green";
  c.style.color = "green";
  report.textContent = x.toUpperCase();
  newGameButton.style.display = "block";

  for (let j = 0; j < 9; j++) {
    field[j].disabled = true;
  }
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
    newGameButton.style.display = "block";
  }

  return false;
};
