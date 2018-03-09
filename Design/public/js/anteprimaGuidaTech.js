$(document).ready(function() {
  $('#inizio').append('<div class="titolopag"><h1>Tecnologia</h1></div>');
  $.get(
    '/guide/Tecnologia',
    function(response) {
      var count = 0;
      var nome = 'guida';
      var parent = new Array();
      if (response) {
        response.forEach(function(anteprimaGuida, index) {
          if (count <= index) {
            $('#contenuto').append('<div class="CopertinaGuida"></div>');
            parent[count] = '#' + nome + (count + 1);
            $('.CopertinaGuida').append('<div id="' + parent[count] + '"class="row guida"><div class="subtitoloGuida"><h5 class="titolo"><h5><hr></div><div class="row"><div class="col-lg-3"><div class="imgPrevguida"><img class="img-fluid rounded imgGuida" src="" alt=""></div></div><div class="col-lg-9"><div class="prevGuida"><div class="testoPrev"></div><div class="row"><div class="col-lg-6"><div class="dataGuida"></div></div><div class="col-lg-6"><div class="vaiGuida"><a href="">Vai a..</a></div></div></div></div></div></div></div>');
            count++;
          }
          console.log(parent[0]);
          for (var i = 0; i < parent.length; i++) {
            $('#contenuto').find('.titolo').append(anteprimaGuida.titolo);
            $('#contenuto').find('.imgGuida').attr('src', anteprimaGuida.immagine);
            $('#contenuto').find('.vaiGuida').attr('href', anteprimaGuida.link);
            $('#contenuto').find('.testoPrev').append(anteprimaGuida.anteprima);
            $('#contenuto').find('.dataGuida').append(anteprimaGuida.data);
            console.log();
          }
        });
      } else {
        alert(response.extra);
      }
    }
  );
});
