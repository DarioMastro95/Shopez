$(document).ready(function() {
  $('#smartphoneCar').show();
  $('#tabletCar').hide();
  $('#droneCar').hide();
  $('#tvCar').hide();
  $('#pcCar').hide();
  $('#fotoCar').hide();
  if($('#Categoria').val()==''){
    alert('Selezionare una categoria');
  }
});

$('#Categoria').change(function(){
  if($('#Categoria').val()=='Smartphone'){
    $('#smartphoneCar').show();
    $('#tabletCar').hide();
    $('#droneCar').hide();
    $('#tvCar').hide();
    $('#pcCar').hide();
    $('#fotoCar').hide();
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
              location.reload();
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
  else if($('#Categoria').val()=='Tablet'){
    $('#smartphoneCar').hide();
    $('#tabletCar').show();
    $('#droneCar').hide();
    $('#tvCar').hide();
    $('#pcCar').hide();
    $('#fotoCar').hide();
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
              location.reload();
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
  else if($('#Categoria').val()=='Drone'){
    $('#smartphoneCar').hide();
    $('#tabletCar').hide();
    $('#droneCar').show();
    $('#tvCar').hide();
    $('#pcCar').hide();
    $('#fotoCar').hide();
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
            location.reload();
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
  else if($('#Categoria').val()=='Smart Tv'){
    $('#smartphoneCar').hide();
    $('#tabletCar').hide();
    $('#droneCar').hide();
    $('#tvCar').show();
    $('#pcCar').hide();
    $('#fotoCar').hide();
    $('#buttonLoadArt').click(function(event){
      event.preventDefault();
      var tv = {
          titolo:$('#titolo').val(),
          recensione:$('#recensione').val(),
          immagine:$('#immagine').val(),
          link:$('#link').val(),
          schermo:$('#schermoTv').val(),
          dimensioni:$('#dimensioniTv').val(),
          tecnologia:$('#tecnologiaTv').val(),
          peso:$('#pesoTv').val(),
          pro:$('#pro').val().split(','),
          contro:$('#contro').val().split(','),
          position:$('#position').val(),
          fascia:$('#fascia').val()
        }
      $.post(
        '/tv',
        tv,
        function(response){
          if(response.success){
            alert(response.extra+' '+tv.titolo);
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
  else if($('#Categoria').val()=='Pc portatile'){
    $('#smartphoneCar').hide();
    $('#tabletCar').hide();
    $('#droneCar').hide();
    $('#tvCar').hide();
    $('#pcCar').show();
    $('#fotoCar').hide();
    $('#buttonLoadArt').click(function(event){
      event.preventDefault();
      var pc = {
          titolo:$('#titolo').val(),
          recensione:$('#recensione').val(),
          immagine:$('#immagine').val(),
          link:$('#link').val(),
          batteria:$('#batteriaPc').val(),
          webcam:$('#webcamPc').val(),
          monitor:$('#monitorPc').val(),
          memoria:$('#memoriaPc').val(),
          processore:$('#processorePc').val(),
          ram:$('#ramPc').val(),
          schedavideo:$('#schedavideoPc').val(),
          sistemaoperativo:$('#sistemaoperativoPc').val(),
          pro:$('#pro').val().split(','),
          contro:$('#contro').val().split(','),
          position:$('#position').val(),
          fascia:$('#fascia').val()
        }
      $.post(
        '/pc',
        pc,
        function(response){
          if(response.success){
            alert(response.extra+' '+pc.titolo);
            location.reload();
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
  else if($('#Categoria').val()=='Fotocamera'){
    $('#smartphoneCar').hide();
    $('#tabletCar').hide();
    $('#droneCar').hide();
    $('#tvCar').hide();
    $('#pcCar').hide();
    $('#fotoCar').show();
    $('#buttonLoadArt').click(function(event){
      event.preventDefault();
      var fotocamera = {
          titolo:$('#titolo').val(),
          recensione:$('#recensione').val(),
          immagine:$('#immagine').val(),
          link:$('#link').val(),
          display:$('#displayFoto').val(),
          zoom:$('#zoomFoto').val(),
          sensore:$('#sensoreFoto').val(),
          memoria:$('#memoriaFoto').val(),
          peso:$('#pesoFoto').val(),
          risoluzione:$('#risoluzioneFoto').val(),
          pro:$('#pro').val().split(','),
          contro:$('#contro').val().split(','),
          position:$('#position').val(),
          fascia:$('#fascia').val()
        }
      $.post(
        '/fotocamera',
        fotocamera,
        function(response){
          if(response.success){
            alert(response.extra+' '+fotocamera.titolo);
            location.reload();
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
