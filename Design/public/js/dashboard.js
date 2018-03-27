$(document).ready(function() {
  $('#Categoria').change(function(){
    if($('#Categoria').val()=='Smartphone'){
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
          $.post(
            '/smartphone',
            tablet,
            function(response){
              if(response.success){
                alert('Smartphone '+smartphone.titolo+' inserito correttamente');
              }
              else{
                alert(response.extra);
              }
            });
          );
        $('.formDashboard').each(function(index,element) {
          element.reset();
        });
      });
    }
    else if($('#Categoria').val()=='Tablet'){
      $('#buttonLoadArt').click(function(event){
        event.preventDefault();
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
            });
          );
        $('.formDashboard').each(function(index,element) {
          element.reset();
        });
      });
    }
    else if($('#Categoria').val()=='Drone'){
      $('#buttonLoadArt').click(function(event){
        event.preventDefault();
        var drone = {
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
          '/drone',
          tablet,
          function(response){
            if(response.success){
              alert('Drone '+drone.titolo+' inserito correttamente');
            }
            else{
              alert(response.extra);
            }
          }
        );
        $('.formDashboard').each(function(index,element) {
          element.reset();
        });
      });
    }
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
