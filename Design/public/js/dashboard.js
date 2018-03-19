$(document).ready(function() {
  $('#buttonLoadArt').click(function(event){
    event.preventDefault();
    var categoria = $('#Categoria').val();
    console.log(categoria);
    if(categoria=='Smartphone'){
      var smartphone = {
          titolo:$('#titolo').val(),
          recensione:$('#recensione').val(),
          immagine:$('#immagine').val(),
          link:$('#link').val(),
          batteria:$('#batteria').val(),
          fotocamera:$('#fotocamera').val(),
          display:$('#display').val(),
          memoria:$('#memoria').val(),
          processore:$('#processore').val(),
          ram:$('#ram').val(),
          rete:$('#rete').val(),
          so:$('#so').val(),
          pro:$('#pro').val().split(','),
          contro:$('#contro').val().split(','),
          position:$('#position').val(),
          fascia:$('#fascia').val()
        }
      $.post(
        '/smartphone',
        smartphone,
        function(response){
          if(response.success){
            alert('Smartphone '+smartphone.titolo+' inserito correttamente');
          }
          else{
            alert(response.extra);
          }
        }
      );
    }
    else if(categoria=='Tablet'){
      var tablet = {
          titolo:$('#titolo').val(),
          recensione:$('#recensione').val(),
          immagine:$('#immagine').val(),
          link:$('#link').val(),
          batteria:$('#batteria').val(),
          fotocamera:$('#fotocamera').val(),
          display:$('#display').val(),
          memoria:$('#memoria').val(),
          processore:$('#processore').val(),
          ram:$('#ram').val(),
          rete:$('#rete').val(),
          so:$('#so').val(),
          pro:$('#pro').val().split(','),
          contro:$('#contro').val().split(','),
          position:$('#position').val(),
          fascia:$('#fascia').val()
        }
      $.post(
        '/tablet',
        tablet,
        function(response){
          if(response.success){
            alert('Tablet '+tablet.titolo+' inserito correttamente');
          }
          else{
            alert(response.extra);
          }
        }
      );
    }

    $('.formDashboard').each(function(index,element) {
      element.reset();
    })
  });




  $('#bold').click(function(event) {
    $('#recensione').val($('#recensione').val()+('<b></b>'));
  });
  $('#italic').click(function(event) {
    $('#recensione').val($('#recensione').val()+('<i></i>'));
  });
  $('#puntato').click(function(event) {
    $('#recensione').val($('#recensione').val()+('<ul><li></li></ul>'));
  });

});
