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
            $(parent+'>.titolo').append(smartphone.titolo);
          });
        }
        else{
          alert(response.extra);
        }
      }
    );
  });
