$(document).ready(function() {
  $('#inizio').append('<div class="titolopag"><h1>Tecnologia</h1></div>');
  $.get(
    '/guide/Tecnologia',
    function(response) {
      var count = 0;
      var j=1;
      var nome = 'guida';
      var parent = new Array();
      if (response) {
        response.forEach(function(anteprimaGuida, index) {
          parent[index] =nome + j;
          $('#contenuto').append('<div class="CopertinaGuida"><div id="' + parent[index] + '"class="row guida"><div class="subtitoloGuida"><h5 class="titolo"><h5><hr></div><div class="row"><div class="col-lg-3"><div class="imgPrevguida"><img class="img-fluid rounded imgGuida" src="" alt=""></div></div><div class="col-lg-9"><div class="prevGuida"><div class="testoPrev"></div><div class="row"><div class="col-lg-6"><div class="dataGuida"></div></div><div class="col-lg-6"><div class="vaiGuida"><a href="" class="linkGuida">Vai a..</a></div></div></div></div></div></div></div></div>');
          j++;
          $('#'+parent[index]).find('.titolo').append(anteprimaGuida.anteprima.titolo);
          $('#'+parent[index]).find('.imgGuida').attr('src', anteprimaGuida.anteprima.immagine);
          $('#'+parent[index]).find('.imgGuida').attr('alt', anteprimaGuida.anteprima.titolo);
          $('#'+parent[index]).find('.linkGuida').attr('href','/home/guideacquistotech/'+anteprimaGuida.anteprima.link);
          $('#'+parent[index]).find('.testoPrev').append(anteprimaGuida.anteprima.anteprima);
          $('#'+parent[index]).find('.dataGuida').append(anteprimaGuida.anteprima.data)
        });
        console.log(parent);
      } else {
        alert(response.extra);
      }
    }
  );
});
