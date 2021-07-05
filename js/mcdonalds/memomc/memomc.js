window.addEventListener("load",function(){

  var memos = $(".image");
  var memosArray = Array.from(memos);
  var imagenes = [0,0,0,0,0,0];

  for (var i = 0; i < memosArray.length; i++) {
    do {
    var numero = Math.round(Math.random()*(6-1)+1);
  } while (imagenes[numero-1]>1);
      memosArray[i].previousSibling.style = "background-image: url(../images/mcdonalds/memomc/"+numero+".jpg);background-size:contain;border-radius: 10px";
      imagenes[numero-1] = imagenes[numero-1] + 1;
      memosArray[i].value = numero;
  }
  var memo1 = undefined;
  var memo1_val = 0;
  var memo2 = undefined;
  var memo2_val = 0;
  var vueltas = 0;
  var paquetes = $(".ch-info");

  function buscar(){
    paquetes.click(function(){
      $(this).addClass("rota");
      if ( vueltas === 0){
        memo1 = $(this);
        memo1_val = $(this).children("input").val();
        vueltas = vueltas + 1;
      } else {
        memo2 = $(this);
        memo2_val = $(this).children("input").val();
        if (memo1_val === memo2_val) {
        vueltas = 0;
        //CUANDO LOGRE ENCONTRAR TODOS LOS PARES
        if($(".rota").length === 12){
          setTimeout(function(){
            alert('¡Lo lograste!');
            location.reload();
          },500)
        };
      } else{
        setTimeout(function(){
        vueltas = 0;
        memo1.removeClass("rota");
        memo2.removeClass("rota");
      },1000)
      }
      }
    });
  };
buscar();
});
