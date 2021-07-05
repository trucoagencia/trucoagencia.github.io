window.addEventListener('load', function() {
    playerCharacter();
    function playerCharacter(){
      var options = document.querySelector(".options").querySelectorAll("img");
      for (var i = 0; i < options.length; i++) {
        options[i].onclick = function(){
          var table = document.querySelector(".table");
          table.style.opacity =1;
          document.querySelector(".main").querySelector("H2").style.opacity = 0;
          document.querySelector(".main").querySelector("H1").style.transform = `translate(0px,10vh)`;
          document.querySelector(".options").style.opacity = 0;
          table.style.transform = `translate(0px,-42vh)`;
          if (this.parentNode.querySelector("input").value == 0) {
            var player = "<img src='../images/mcdonalds/ttt/happy-1.png' alt='Cajita feliz.' >";
            var computer = "<img src='../images/mcdonalds/ttt/cross.png' alt='Ilustración de una cruz.'>";
          } else {
            var computer = "<img src='../images/mcdonalds/ttt/happy-1.png' alt='Cajita feliz.'>";
            var player = "<img src='../images/mcdonalds/ttt/cross.png' alt='Ilustración de una cruz.'>";
          }
          playerChoise(player,computer);
        }
      }
    }
  
    function playerChoise(player,computer){
  
      var options = document.querySelectorAll(".fields");
  
      for (var i = 0; i < options.length; i++) {
        options[i].onclick = function(){
          var optionId = parseInt(this.parentElement.id);
          var optionValues = document.querySelectorAll("input[name=playerWin]");
          var optionValuesComputer = document.querySelectorAll("input[name=computerWin]");
          if(this.hasChildNodes() === false){
            if(optionId == 0 || optionId == 3 || optionId == 6){
              var optionValue = optionValues[1];
              optionValue.value++;
              if(optionId == 0){
                var optionValue = optionValues[0];
                optionValue.value++;
                var optionValue = optionValues[5];
                optionValue.value++;
              } else if (optionId == 3) {
                var optionValue = optionValues[6];
                optionValue.value++;
              } else if (optionId == 6) {
                var optionValue = optionValues[4];
                optionValue.value++;
                var optionValue = optionValues[7];
                optionValue.value++;
              }
            } else if (optionId == 1 || optionId == 4 || optionId == 7){
              var optionValue = optionValues[2];
              optionValue.value++;
              if(optionId == 1){
                var optionValue = optionValues[5];
                optionValue.value++;
              } else if (optionId == 4) {
                var optionValue = optionValues[0];
                optionValue.value++;
                var optionValue = optionValues[4];
                optionValue.value++;
                var optionValue = optionValues[6];
                optionValue.value++;
              } else if (optionId == 7) {
                var optionValue = optionValues[7];
                optionValue.value++;
              }
            } else if (optionId == 2 || optionId == 5 || optionId == 8){
              var optionValue = optionValues[3];
              optionValue.value++;
              if(optionId == 2){
                var optionValue = optionValues[4];
                optionValue.value++;
                var optionValue = optionValues[5];
                optionValue.value++;
              } else if (optionId == 5) {
                var optionValue = optionValues[6];
                optionValue.value++;
              } else if (optionId == 8) {
                var optionValue = optionValues[0];
                optionValue.value++;
                var optionValue = optionValues[7];
                optionValue.value++;
              }
            }
          } else {
            alert("Este casillero no está disponible");
            return;
          }
          this.innerHTML = player;
          setTimeout(function(){
            for (var i = 0; i < optionValues.length; i++) {
              if(optionValues[i].value == 3){
                for (var i = 0; i < options.length; i++) {
                  while (options[i].firstChild) {
                    options[i].removeChild(options[i].firstChild);
                  }
                }
                for (var i = 0; i < optionValues.length; i++) {
                  optionValues[i].value = 0;
                  optionValuesComputer[i].value = 0;
                }
                alert("ganaste");
                return;
              }
            }
  
            if(empate(optionValues,optionValuesComputer)){
              for (var i = 0; i < options.length; i++) {
                while (options[i].firstChild) {
                  options[i].removeChild(options[i].firstChild);
                }
              }
              return;
            }
            computerChoise(computer);
            },600);
        }
      }
    }
  
  
    function empate(computerValues,playerValues){
      var fieldsComplete = true;
      var fields = document.querySelectorAll(".fields");
      for (var i = 0; i < fields.length; i++) {
        if(fields[i].hasChildNodes() === false){
          fieldsComplete = false;
        }
      }
      if (fieldsComplete) {
        for (var i = 0; i < computerValues.length; i++) {
          computerValues[i].value = 0;
          playerValues[i].value = 0;
        }
        alert("¡Es un empate!");
        return fieldsComplete;
      } else {
        return false;
      }
    }
  
    function computerChoise(computer){
      var options = document.querySelectorAll(".fields");
      var optionValuesPlayer = document.querySelectorAll("input[name=playerWin]");
      var optionValuesComputer = document.querySelectorAll("input[name=computerWin]");
      var playerChoiseToWin = [[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]];
      var computerChoiseToWin = [[0,1,2],[3,4,5],[6,7,8],[6,4,2],[6,3,0],[7,4,1],[8,5,2],[8,4,0]]
      var computerChoise = [[0,4,7],[0,5],[0,3,6],[1,4],[1,3,5,7],[1,6],[2,3,4],[2,5],[2,6,7]];
      var randomChoise = false;
  
        if (options[4].hasChildNodes() === false) {
          options[4].innerHTML = computer;
          for (var x = 0; x < computerChoise[4].length; x++) {
            var optionValue = optionValuesComputer[computerChoise[4][x]];
            optionValue.value++;
          }
        } else {
          for (var j = 0; j < optionValuesPlayer.length; j++) {
            console.log(optionValuesComputer[j]);
            if (optionValuesComputer[j].value == 2){
            var computerOptions = computerChoiseToWin[j];
            for (var e = 0; e < computerOptions.length; e++) {
              if (options[computerOptions[e]].hasChildNodes() === false) {
                  options[computerOptions[e]].innerHTML = computer;
                  for (var w = 0; w < computerChoise[computerOptions[e]].length; w++) {
                    var optionValue = optionValuesComputer[computerChoise[computerOptions[e]][w]];
                    optionValue.value++;
                  }
              setTimeout(function(){
                    for (var w = 0; w < optionValuesComputer.length; w++) {
                      if(optionValuesComputer[w].value == 3){
                        for (var i = 0; i < options.length; i++) {
                          while (options[i].firstChild) {
                            options[i].removeChild(options[i].firstChild);
                          }
                        }
                        for (var i = 0; i < optionValuesPlayer.length; i++) {
                          optionValuesPlayer[i].value = 0;
                          optionValuesComputer[i].value = 0;
                        }
                        alert("Haz perdido, inténtalo de nuevo");
                        return;
                        }
                      }
                    },600);
                  return;
              }
            }
            } else if(optionValuesPlayer[j].value == 2){
              var computerOptions = playerChoiseToWin[j];
              for (var e = 0; e < computerOptions.length; e++) {
                if (options[computerOptions[e]].hasChildNodes() === false) {
                    options[computerOptions[e]].innerHTML = computer;
                    for (var w = 0; w < computerChoise[computerOptions[e]].length; w++) {
                      var optionValue = optionValuesComputer[computerChoise[computerOptions[e]][w]];
                      optionValue.value++;
                    }
                setTimeout(function(){
                      for (var w = 0; w < optionValuesComputer.length; w++) {
                        if(optionValuesComputer[w].value == 3){
                          for (var i = 0; i < options.length; i++) {
                            while (options[i].firstChild) {
                              options[i].removeChild(options[i].firstChild);
                            }
                          }
                          for (var i = 0; i < optionValuesPlayer.length; i++) {
                            optionValuesPlayer[i].value = 0;
                            optionValuesComputer[i].value = 0;
                          }
                          alert("Haz perdido, inténtalo de nuevo");
                          return;
                          }
                        }
                      },600);
                    return;
                }
              }
            }
        } randomChoise=true;
      }
      if (randomChoise) {
          var getComputerChoise = Math.round(Math.random()*8);
          while (options[getComputerChoise].hasChildNodes()){
              var getComputerChoise = Math.round(Math.random()*8);
            }
            options[getComputerChoise].innerHTML =computer;
            for (var x = 0; x < computerChoise[getComputerChoise].length; x++) {
                  var optionValue = optionValuesComputer[computerChoise[getComputerChoise][x]];
                  optionValue.value++;
                }
            setTimeout(function(){
                  for (var w = 0; w < optionValuesComputer.length; w++) {
                    if(optionValuesComputer[w].value == 3){
                      for (var i = 0; i < options.length; i++) {
                        while (options[i].firstChild) {
                          options[i].removeChild(options[i].firstChild);
                        }
                      }
                      for (var i = 0; i < optionValuesPlayer.length; i++) {
                        optionValuesPlayer[i].value = 0;
                        optionValuesComputer[i].value = 0;
                      }
                      alert("Haz perdido, inténtalo de nuevo");
                      return;
                      }
                    }
                  },600);
            return;
          }
    }
  
  })
  