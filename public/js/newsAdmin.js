$(document).ready(function() {
  var date_input=$('input[name="date"]'); //our date input has the name "date"
  var container=$('#date').length>0 ? $('.bootstrap-iso form').parent() : "body";
  var options={
    format: 'dd-mm-yy',
    container: container,
    todayHighlight: true,
    autoclose: true,
  };
date_input.datepicker(options);
  $('#Loadnews').click(function(event) {
    event.preventDefault();
      var titolo=$('#titolo').val();
      var immagine=$('#immagine').val();
      var data=$('#data').val();
      var position =$('#position').val();
      var link=$('#link').val();
      var news= {
        titolo: titolo,
        immagine: immagine,
        position : position,
        data: data,
        link: link
      };
      console.log(news);
      $.post(
        '/news',
        news,
        function(response) {
          if (response.success) {
            alert('News ' + news.titolo + ' inserito correttamente');
          } else {
            alert(response.extra);
          }
        }
      );
    });
});
