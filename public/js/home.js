$(document).ready(function() {
  $.get(
    '/newshome',
    function(response){
      if(response){
        response.forEach(function(news,index) {
        var parent;
        switch (news.position) {
          case 1:
            parent = '#primanews'
            break;
          case 2:
            parent = '#secondanews'
            break;
          case 3:
            parent = '#terzanews'
            break;
          case 4:
            parent = '#quartanews'
            break;
          default:
        }
          $(parent).find('.titolo').append(news.titolo);
          $(parent).find('.immagine').attr('src',news.immagine);
          $(parent).find('.immagine').attr('alt',news.titolo);
          $(parent).find('.link').attr('href',news.link);
          $(parent).find('.data').append(news.data);
        });
      }
      else{
        alert(response.extra);
      }
    }
  );
});
