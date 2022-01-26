    report=document.querySelector('.report');
    board = document.querySelector(".gameBoard");
    newGameButton=document.querySelector('.newGame');
    newGame = () => {
        board.innerHTML='';
        newGameButton.style.display='none';
        report.textContent='Who will be the winer?'

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
        field[i].style.backgroundColor='rgb(20,20,20)';
        field[i].style.color='white';
        field[i].style.fontSize='48px';
        field[i].style.boxSizing='border-box'
        field[i].addEventListener("click", function () {
          if (field[i].textContent === "") {
            field[i].textContent = "x";
           

            if(winning(field,i,'Great! You won the game!')==true){
                return;
            }
           
            
            a = Math.floor(Math.random() * 9);

            if (field[a].textContent === "") {
              field[a].textContent = "o";
              if(winning(field, a,'You lost! Better luck next time!')==true){
                  return;
              }
              
            } else {
              let j = 0;
              while (field[a].textContent !== "" && j < 9) {
                j++;
                a = Math.floor(Math.random() * 9);
              }

              if (field[a].textContent === "") {
                field[a].textContent = "o";
                if (
                  winning(field, a, "You lost! Better luck next time!") == true
                ) {
                  return;
                }

                
              }
            }
          }

          
        });
      }
    
    
    }

    let winning=(field,i,x)=>{

        if (field[i].textContent != "") {
            if (i < 3) {
                if (
                    field[0].textContent == field[1].textContent&&
                    field[0].textContent == field[2].textContent)
                    {
                        field[0].style.color = "green";
                        field[1].style.color = "green";
                        field[2].style.color = "green";
                        report.textContent = (x).toUpperCase();
                        newGameButton.style.display = "block";
                        for (let j = 0; j < 9; j++) {
                          field[j].disabled = true;
                        }
                        return true;
                        
                    }

                else if(
                    field[i].textContent == field[i + 3].textContent &&
                    field[i].textContent==field[i + 6].textContent)
                    {
                        field[i].style.color = "green";
                        field[i + 3].style.color = "green";
                        field[i + 6].style.color = "green";
                        report.textContent = (x).toUpperCase();
                        newGameButton.style.display = "block";
                        for (let j = 0; j < 9; j++) {
                          field[j].disabled = true;
                        }
                        return true;
                    }

            }
            
            else if (i > 2 && i < 6) {
                if (
                    field[3].textContent == field[4].textContent &&
                    field[3].textContent == field[5].textContent)
                    {
                        field[3].style.color = "green";
                        field[4].style.color = "green";
                        field[5].style.color = "green";
                        report.textContent = (x).toUpperCase();
                        newGameButton.style.display = "block";
                        for (let j = 0; j < 9; j++) {
                          field[j].disabled = true;
                        }
                        return true;
                    }


                else if(
                    field[i].textContent == field[i + 3].textContent &&
                    field[i].textContent == field[i - 3].textContent) 
                    {
                        field[i].style.color = "green";
                        field[i - 3].style.color = "green";
                        field[i + 3].style.color = "green";
                        report.textContent = (x).toUpperCase();
                        newGameButton.style.display = "block";
                        for (let j = 0; j < 9; j++) {
                          field[j].disabled = true;
                        }
                        return true;
                    }
            } 
            
            else {
                if (
                    field[6].textContent == field[7].textContent &&
                    field[6].textContent == field[8].textContent)
                    {
                        field[6].style.color='green';
                        field[7].style.color = "green";
                        field[8].style.color = "green";
                        report.textContent = (x).toUpperCase();
                        newGameButton.style.display = "block";
                        for (let j = 0; j < 9; j++) {
                          field[j].disabled = true;
                        }
                        return true;
                    }
                
                else if(field[i].textContent == field[i - 3].textContent &&
                    field[i].textContent == field[i - 6].textContent)
                    
                    {
                        field[i].style.color = "green";
                        field[i-3].style.color = "green";
                        field[i-6].style.color = "green";
                        report.textContent = (x).toUpperCase();
                        newGameButton.style.display = "block";
                        
                        for(let j=0;j<9;j++){
                            field[j].disabled = true;
                        }
                        return true;
                    }
            }
          }
          return false;
    }















