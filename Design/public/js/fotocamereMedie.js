$(document).ready(function() {
  $.get(
    '/fotocamere/Fasciamedia',
    function(response){
      if(response){
        response.forEach(function(fotocamera,index) {
        var parent;
        switch (fotocamera.position) {
          case 1:
            parent = '#primariga'
            break;
          case 2:
            parent = '#secondariga'
            break;
          case 3:
            parent = '#terzariga'
            break;
          case 4:
            parent = '#quartariga'
            break;
          case 5:
            parent = '#quintariga'
            break;
          default:
        }
          $(parent).find('.titolo').append(fotocamera.titolo);
          $(parent).find('.immagine').attr('src',fotocamera.immagine);
          $(parent).find('.link').attr('href',fotocamera.link);
          $(parent).find('.recensione').append(fotocamera.recensione);
          $(parent).find('.zoom').append(fotocamera.zoom);
          $(parent).find('.sensore').append(fotocamera.sensore);
          $(parent).find('.peso').append(fotocamera.peso);
          $(parent).find('.risoluzione').append(fotocamera.risoluzione);
          $(parent).find('.display').append(fotocamera.display);
          $(parent).find('.memoria').append(fotocamera.memoria);
          if(fotocamera.pro[0]!=''){
            for (var i = 0; i < fotocamera.pro.length; i++) {
              $(parent).find('.proDin').append('<li>'+fotocamera.pro[i]+'</li>');
            }
          }
          if(fotocamera.contro[0]!=''){
            for (var i = 0; i < fotocamera.contro.length; i++) {
              $(parent).find('.controDin').append('<li>'+fotocamera.contro[i]+'</li>');
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
