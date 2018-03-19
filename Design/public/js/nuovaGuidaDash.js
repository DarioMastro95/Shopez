var counter = 0;

$(document).ready(function () {
  var titolo = '';
  var introsuzione = '';
  var prodotto =[{
    posizione: 0,
    nome: '',
    immagine: '',
    recensione: '',
    linkAmazon: ''
  }];
  $('#LoadGuida').click(function (event) {
    event.preventDefault();
    for (var i = 0; i < counter; i++) {
      
    }
    console.log(prodotto);
  });

  $('#AggiungiProdotto').click(function (event) {
    event.preventDefault();
    $('#Prodotti').append('<div class="separate"><h5>Prodotto ' + (counter + 1) + '</h5></div><div class="row"><div class="col-lg-6"><div class="form-group"><label for="immagineP' + counter + '">Immagine</label><input type="text" class="form-control" id="immagineP' + counter + '" aria-describedby="" placeholder="Url immagine prodotto"></div><div class="form-group"><label for="nome' + counter + '">Nome</label><input type="text" class="form-control" id="nome' + counter + '" aria-describedby="" placeholder="Nome prodotto"></div><div class="form-group"><label for="linkP' + counter + '">Link amazon</label><input type="text" class="form-control" id="linkP' + counter + '" aria-describedby="" placeholder="Url amazon"></div></div><div class="col-lg-6"><textarea class="form-control guidaDescrizioneP" id="descrizioneP' + counter + '" rows="10" placeholder="descrizione prodotto"></textarea></div></div>');
    counter = counter + 1;
    console.log(counter);
  });

  $('#bold').click(function (event) {
    $('#anteprima').val($('#anteprima').val() + ('<b></b>'));
  });
  $('#italic').click(function (event) {
    $('#anteprima').val($('#anteprima').val() + ('<i></i>'));
  });
  $('#puntato').click(function (event) {
    $('#anteprima').val($('#anteprima').val() + ('<ul><li></li></ul>'));
  });

});