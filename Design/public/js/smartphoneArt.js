$(document).ready(function() {
    $.get(
      '/smartphone/Fasciaalta',
      function(response){
        if(response){
          response.forEach(function(smartphone,index) {
          var parent;
          switch (index) {
            case 0:
              parent = '#primariga'
              break;
            default:

          }
            $(parent).find('.titolo').append(smartphone.titolo);
            $(parent).find('.immagine').attr('src',smartphone.immagine);
            $(parent).find('.link').attr('href',smartphone.link);
            $(parent).find('.recensione').append(smartphone.recensione);
            $(parent).find('.processore').append(smartphone.processore);
            $(parent).find('.display').append(smartphone.display);
            $(parent).find('.fotocamera').append(smartphone.fotocamera);
            $(parent).find('.memoria').append(smartphone.memoria);
            $(parent).find('.ram').append(smartphone.ram);
            $(parent).find('.sistemaoperativo').append(smartphone.so);
            $(parent).find('.rete').append(smartphone.rete);
            $(parent).find('.batteria').append(smartphone.batteria);
            if(smartphone.pro[0]!=''){
              for (var i = 0; i < smartphone.pro.length; i++) {
                $(parent).find('.proDin').append('<li>'+smartphone.pro[i]+'</li>');
              }
            }
            if(smartphone.contro[0]!=''){
              for (var i = 0; i < smartphone.contro.length; i++) {
                $(parent).find('.controDin').append('<li>'+smartphone.contro[i]+'</li>');
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
