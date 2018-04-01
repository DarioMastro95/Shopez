$(document).ready(function() {
  $.get(
    '/tv/Fasciaalta',
    function(response){
      if(response){
        response.forEach(function(tv,index) {
        var parent;
        switch (tv.position) {
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
          $(parent).find('.titolo').append(tv.titolo);
          $(parent).find('.immagine').attr('src',tv.immagine);
          $(parent).find('.link').attr('href',tv.link);
          $(parent).find('.recensione').append(tv.recensione);
          $(parent).find('.schermo').append(tv.schermo);
          $(parent).find('.tecnologia').append(tv.tecnologia);
          $(parent).find('.dimensioni').append(tv.dimensioni);
          $(parent).find('.peso').append(tv.peso);
          if(tv.pro[0]!=''){
            for (var i = 0; i < tv.pro.length; i++) {
              $(parent).find('.proDin').append('<li>'+tv.pro[i]+'</li>');
            }
          }
          if(tv.contro[0]!=''){
            for (var i = 0; i < tv.contro.length; i++) {
              $(parent).find('.controDin').append('<li>'+tv.contro[i]+'</li>');
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
