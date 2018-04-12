$(document).ready(function() {
  $('#LoadGuidaPrev').click(function(event) {
    event.preventDefault();
    var titolo = $('#titolo').val();
    var tipo = $('#tipoGuida').val();
    var anteprima = $('#anteprima').val();
    var immagine = $('#immagine').val();
    var link=titolo.toLowerCase();
    link.replace(/\s/g, '');
    var data = $('#data').val();
    if(tipo =='Tecnologia'){
      var guidaTech= {
        titolo: titolo,
        immagine: immagine,
        anteprima: anteprima,
        data: data,
        link: link,
        categoria: tipo
      };
      console.log(guidaTech);
      $.post(
        '/anteprimaGuidaTech',
        guidaTech,
        function(response) {
          if (response.success) {
            alert('Anteprima guida ' + guidaTech.titolo + ' inserito correttamente');
          } else {
            alert(response.extra);
          }
        }
      );

      $('.formDashboard').each(function(index, element) {
        element.reset();
      })
    }
    else  if(tipo =='Salute'){
      var guidaSalute= {
        titolo: titolo,
        immagine: immagine,
        anteprima: anteprima,
        data: data,
        link: link,
        categoria: tipo
      };
      console.log(guidaTech);
      $.post(
        '/anteprimaGuidaSalute',
        guidaSalute,
        function(response) {
          if (response.success) {
            alert('Anteprima guida ' + guidaSalute.titolo + ' inserito correttamente');
          } else {
            alert(response.extra);
          }
        }
      );

      $('.formDashboard').each(function(index, element) {
        element.reset();
      })
    }


  });
  $('#bold').click(function(event) {
    $('#anteprima').val($('#anteprima').val() + ('<b></b>'));
  });
  $('#italic').click(function(event) {
    $('#anteprima').val($('#anteprima').val() + ('<i></i>'));
  });
  $('#puntato').click(function(event) {
    $('#anteprima').val($('#anteprima').val() + ('<ul><li></li></ul>'));
  });
});
