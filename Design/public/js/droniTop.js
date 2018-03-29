$(document).ready(function() {
  $.get(
    '/droni/Fasciaalta',
    function(response){
      if(response){
        response.forEach(function(drone,index) {
        var parent;
        switch (index) {
          case 0:
            parent = '#primariga'
            break;
          case 1:
            parent = '#secondariga'
            break;
          case 2:
            parent = '#terzariga'
            break;
          case 3:
            parent = '#quartariga'
            break;
          case 4:
            parent = '#quintariga'
            break;
          default:

        }
          $(parent).find('.titolo').append(drone.titolo);
          $(parent).find('.immagine').attr('src',drone.immagine);
          $(parent).find('.link').attr('href',drone.link);
          $(parent).find('.recensione').append(drone.recensione);
          $(parent).find('.autonomia').append(drone.autonomia);
          $(parent).find('.dimensione').append(drone.dimensione);
          $(parent).find('.risoluzione').append(drone.risoluzione);
          $(parent).find('.distanza').append(drone.distanza);
          $(parent).find('.controller').append(drone.controller);
          $(parent).find('.batteria').append(drone.batteria);
          if(drone.pro[0]!=''){
            for (var i = 0; i < drone.pro.length; i++) {
              $(parent).find('.proDin').append('<li>'+drone.pro[i]+'</li>');
            }
          }
          if(drone.contro[0]!=''){
            for (var i = 0; i < drone.contro.length; i++) {
              $(parent).find('.controDin').append('<li>'+drone.contro[i]+'</li>');
            }
          }
        });
      }
      else{
        alert(response.extra);
      }
    }
  );
});
