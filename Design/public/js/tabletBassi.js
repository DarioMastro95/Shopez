$(document).ready(function() {
  $.get(
    '/tablet/Fasciabassa',
    function(response){
      if(response){
        response.forEach(function(tablet,index) {
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
          $(parent).find('.titolo').append(tablet.titolo);
          $(parent).find('.immagine').attr('src',tablet.immagine);
          $(parent).find('.link').attr('href',tablet.link);
          $(parent).find('.recensione').append(tablet.recensione);
          $(parent).find('.processore').append(tablet.processore);
          $(parent).find('.display').append(tablet.display);
          $(parent).find('.fotocamera').append(tablet.fotocamera);
          $(parent).find('.memoria').append(tablet.memoria);
          $(parent).find('.ram').append(tablet.ram);
          $(parent).find('.sistemaoperativo').append(tablet.so);
          $(parent).find('.rete').append(tablet.rete);
          $(parent).find('.batteria').append(tablet.batteria);
          if(tablet.pro[0]!=''){
            for (var i = 0; i < tablet.pro.length; i++) {
              $(parent).find('.proDin').append('<li>'+tablet.pro[i]+'</li>');
            }
          }
          if(tablet.contro[0]!=''){
            for (var i = 0; i < tablet.contro.length; i++) {
              $(parent).find('.controDin').append('<li>'+tablet.contro[i]+'</li>');
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
