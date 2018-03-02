$(document).ready(function() {
  $('#buttonLoadArt').click(function(event){
    event.preventDefault();
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
      console.log(smartphone);
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
    $('.formDashboard').each(function(index,element) {
      element.reset();
    })
  });
});
