$(document).ready(function() {
  $.get(
    '/guideTech/'+$('.titolopag').text(),
    function(response) {
      var guidaT;
      var nrprodotti;
      var lPro;
      var lContro;
      if(response){
        guidaT = response;
        nrprodotti = response.guida.prodotti.length;
        for (var i = 0; i < nrprodotti; i++) {
          $('#contenuto').append('<div class="row" id="'+i+'"><div class="col-lg-4 col-md-12"><div class="row"><div class="subtitolo"><h5 class="titolo"></h5><hr></div></div><div class="row"><div class="picture"><img class="img-fluid imgart immagine" src="" alt=""></div></div><div class="row"><div class="acquista"><a class="button link" href="" onclick="window.open(this.href);return false" role="button"><span><b>ACQUISTA</b></span><div class="icon"><i class=""><img id="amazon" class="img-fluid"src="/img/icone/amazon-icon.svg" width="50px" height="50px"></i><i class="fa fa-check"></i></div></a></div></div></div><div class="col-lg-8"><div class="row"><div class="subtitolo"><h5>Recensione</h5><hr></div><div class="recensione pre-scrollable"></div></div><div class="row"><div class="col-lg-6 col-md-6 near"><div class="pro"><b>PRO</b></div><div class="proContent"><ul class="proUl proDin"></ul></div></div><div class="col-lg-6 col-md-6 near"><div class="contro"><b>CONTRO</b></div><div class="controContent"><ul class="controUl controDin"></ul></div></div></div></div></div>');
          lPro = guidaT.guida.prodotti[i].pro.length;
          lContro = guidaT.guida.prodotti[i].pro.length;
          console.log(response);
          $('#'+i).find('.recensione').append(guidaT.guida.prodotti[i].descrizione);
          $('#'+i).find('.titolo').append(guidaT.guida.prodotti[i].nome);
          $('#'+i).find('.immagine').attr('src',guidaT.guida.prodotti[i].immagine);
          $('#'+i).find('.link').attr('href',guidaT.guida.prodotti[i].linkAmazon);
          if(guidaT.guida.prodotti[i].pro[0]!=''){
            for (var j = 0; j < lPro ; j++) {
              $('#'+i).find('.proDin').append('<li>'+guidaT.guida.prodotti[i].pro[j]+'</li>');
            }
          }
          if(guidaT.guida.prodotti[i].contro[0]!=''){
            for (var j = 0; j < lContro; j++) {
              $('#'+i).find('.controDin').append('<li>'+guidaT.guida.prodotti[i].contro[j]+'</li>');
            }
          }
        }

      }
      else{
        alert(response.extra);
      }
    }
  );
});
