window.addEventListener('load', function() {

    document.querySelector('#home').addEventListener('click', function(){
      window.location="https://trucoagencia.github.io/mcdonalds";
    });

    function activarInstrucciones(){
      $('#instruccionesBoton').trigger("click");
    }

    function getComputerChoise() {
      var computerChoise = Math.round(Math.random() * (3 - 1) + parseInt(1));

      var options = document.querySelector('.computerChoise').querySelectorAll('.option');
      // first child of the parent node
      let sibling = options[computerChoise - 1].parentNode.firstChild;
      let siblings = [];
      // collecting siblings
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== options[computerChoise - 1]) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }

      for (var i = 0; i < siblings.length; i++) {
        siblings[i].style.opacity = 0;
      }
      var position = options[computerChoise - 1].getBoundingClientRect();
      var translate = options[1].getBoundingClientRect().left - position.left;
      options[computerChoise - 1].style.transform = `translate(${translate}px,0)`;

      return computerChoise;

    }

    function getResult(computerChoise, playerChoise, optionPosition) {
      var result = computerChoise - playerChoise;
      if (computerChoise == playerChoise) {

      } else if (result == 1 || result == -2) {
        var score = parseInt(document.querySelector('.computerScore').innerText);
        score++;
        document.querySelector('.computerScore').innerHTML = `<h3>${score}</h3>`;
        winner();
        // alert('Perdiste :(, inténtalo de nuevo');
      } else {
        var score = parseInt(document.querySelector('.playerScore').innerText);
        score++;
        document.querySelector('.playerScore').innerHTML = `<h3>${score}</h3>`;
        winner();
        // alert('¡Ganaste!')
      }

      setTimeout(function() {
        var options = document.querySelectorAll('.option');
        for (var i = 0; i < options.length; i++) {
          options[i].style.opacity = 1;
        }
        optionPosition.style.transform = `translate(0px,0)`;
        options[computerChoise + 2].style.transform = `translate(0px,0)`;
        totalTime = 10;
        document.querySelector("input[name='stopper']").value= 0;
        updateClock();
      }, 1000)

    }

    function playerOptions() {
      var options = document.querySelector('.playerChoise').querySelectorAll('.option');
      for (var i = 0; i < options.length; i++) {
        options[i].onclick = function() {
          document.querySelector("input[name='stopper']").value = 1;
          playerChoise = this.querySelector("input").value;
          // first child of the parent node
          let sibling = this.parentNode.firstChild;
          let siblings = [];
          // collecting siblings
          while (sibling) {
            if (sibling.nodeType === 1 && sibling !== this) {
              siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
          }
          for (var i = 0; i < siblings.length; i++) {
            siblings[i].style.opacity = 0;
          }
          // getting the x position
          var position = this.getBoundingClientRect();
          var translate = options[1].getBoundingClientRect().left - position.left;
          this.style.transform = `translate(${translate}px,0)`;
          var optionPosition = this;
          var computerChoise = getComputerChoise();
          setTimeout(function() {
            getResult(computerChoise, playerChoise, optionPosition);
          }, 650);

        }
      }
    }

    function winner(){
      var winner = document.querySelector(".score").querySelectorAll("h3");

      for (var i = 0; i < winner.length; i++) {
        if (parseInt(winner[i].innerHTML) == 10) {
          if (i == 0) {
            setTimeout(function(){
              alert("¡Has ganado!");
              restart();
            },800);
          } else {
            setTimeout(function(){
              alert("¡Has perdido, inténtalo otra vez!")
              restart();
            },800);
          }
        }
      }
    }

    function restart(){
      var score = document.querySelector(".score").querySelectorAll("h3");

      for (var i = 0; i < score.length; i++) {
        score[i].innerHTML = 0;
      }

      totalTime = 10;
      return totalTime;
    }

    var totalTime = 10;

    function updateClock() {
      document.getElementById('countdown').innerHTML = totalTime;
      var stopper = document.querySelector("input[name='stopper']").value;
      if(totalTime==0){
        alert('No elegiste ninguna opción, pierdes un punto :(');
        var score = parseInt(document.querySelector('.computerScore').innerText);
        score++;
        document.querySelector('.computerScore').innerHTML = `<h3>${score}</h3>`;
        setTimeout(function(){
          totalTime = 10;
          updateClock();
        },500);
      }else if (stopper == 0){
        totalTime-=1;
        setTimeout(function(){
          updateClock();
        },1000);
      }
    }


    playerOptions();
    activarInstrucciones();

  })
