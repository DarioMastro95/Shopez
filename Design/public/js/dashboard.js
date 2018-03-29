$(document).ready(function() {
  $('#smartphoneCar').show();
  $('#tabletCar').hide();
  $('#droneCar').hide();
  $('#Categoria').change(function(){
    if($('#Categoria').val()=='Smartphone'){
      $('#smartphoneCar').show();
      $('#tabletCar').hide();
      $('#droneCar').hide();
      $('#buttonLoadArt').click(function(event){
        event.preventDefault();
          var smartphone = {
              titolo:$('#titolo').val(),
              recensione:$('#recensione').val(),
              immagine:$('#immagine').val(),
              link:$('#link').val(),
              batteria:$('#batteriaSmart').val(),
              fotocamera:$('#fotocameraSmart').val(),
              display:$('#displaySmart').val(),
              memoria:$('#memoriaSmart').val(),
              processore:$('#processoreSmart').val(),
              ram:$('#ramSmart').val(),
              rete:$('#reteSmart').val(),
              so:$('#soSmart').val(),
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
                alert(response.extra+' '+smartphone.titolo);
              }
              else{
                alert(response.extra);
              }
            }
          );
        $('.formDashboard').each(function(index,element) {
          element.reset();
        });
        location.reload().delay(1000);
      });
    }
    else if($('#Categoria').val()=='Tablet'){
      $('#smartphoneCar').hide();
      $('#tabletCar').show();
      $('#droneCar').hide();
      $('#buttonLoadArt').click(function(event){
        event.preventDefault();
          var tablet = {
              titolo:$('#titolo').val(),
              recensione:$('#recensione').val(),
              immagine:$('#immagine').val(),
              link:$('#link').val(),
              batteria:$('#batteriaTab').val(),
              fotocamera:$('#fotocameraTab').val(),
              display:$('#displayTab').val(),
              memoria:$('#memoriaTab').val(),
              processore:$('#processoreTab').val(),
              ram:$('#ramTab').val(),
              rete:$('#reteTab').val(),
              so:$('#soTab').val(),
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
                alert(response.extra+' '+tablet.titolo);
              }
              else{
                alert(response.extra);
              }
            }
          );
        $('.formDashboard').each(function(index,element) {
          element.reset();
        });
        location.reload().delay(1000);;
      });
    }
    else if($('#Categoria').val()=='Drone'){
      $('#smartphoneCar').hide();
      $('#tabletCar').hide();
      $('#droneCar').show();
      $('#buttonLoadArt').click(function(event){
        event.preventDefault();
        var drone = {
            titolo:$('#titolo').val(),
            recensione:$('#recensione').val(),
            immagine:$('#immagine').val(),
            link:$('#link').val(),
            batteria:$('#batteriaDrone').val(),
            dimensione:$('#dimensioneDrone').val(),
            distanza:$('#distanzaDrone').val(),
            autonomia:$('#autonomiaDrone').val(),
            controller:$('#controllerDrone').val(),
            risoluzione:$('#risoluzioneDrone').val(),
            pro:$('#pro').val().split(','),
            contro:$('#contro').val().split(','),
            position:$('#position').val(),
            fascia:$('#fascia').val()
          }
        $.post(
          '/drone',
          drone,
          function(response){
            if(response.success){
              alert(response.extra+' '+drone.titolo);
            }
            else{
              alert(response.extra);
            }
          }
        );
        $('.formDashboard').each(function(index,element) {
          element.reset();
        });

        location.reload().delay(1000);
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
