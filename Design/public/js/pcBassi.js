$(document).ready(function() {
  $.get(
    '/pc/Fasciabassa',
    function(response){
      if(response){
        response.forEach(function(pc,index) {
        var parent;
        switch (pc.position) {
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
          $(parent).find('.titolo').append(pc.titolo);
          $(parent).find('.immagine').attr('src',pc.immagine);
          $(parent).find('.immagine').attr('alt',pc.titolo);
          $(parent).find('.link').attr('href',pc.link);
          $(parent).find('.recensione').append(pc.recensione);
          $(parent).find('.processore').append(pc.processore);
          $(parent).find('.monitor').append(pc.monitor);
          $(parent).find('.webcam').append(pc.webcam);
          $(parent).find('.memoria').append(pc.memoria);
          $(parent).find('.ram').append(pc.ram);
          $(parent).find('.sistemaoperativo').append(pc.sistemaoperativo);
          $(parent).find('.gpu').append(pc.schedavideo);
          $(parent).find('.batteria').append(pc.batteria);
          if(pc.pro[0]!=''){
            for (var i = 0; i < pc.pro.length; i++) {
              $(parent).find('.proDin').append('<li>'+pc.pro[i]+'</li>');
            }
          }
          if(pc.contro[0]!=''){
            for (var i = 0; i < pc.contro.length; i++) {
              $(parent).find('.controDin').append('<li>'+pc.contro[i]+'</li>');
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
