$(document).ready(function() {
  $('#LoadGuidaPrev').click(function(event){
    event.preventDefault();
    var guidaTech= {
        titolo:$('#titolo').val(),
        categoria:$('#categoria').val(),
        anteprima:$('#anteprima').val(),
        immagine:$('#immagine').val(),
        data:$('#data').val(),
      }
    $.post(
      '/anteprimaGuida',
      guidaTech,
      function(response){
        if(response.success){
          alert('Anteprima guida '+guidaTech.titolo+' inserito correttamente');
        }
        else{
          alert(response.extra);
        }
      }
    );
    $('.formDashboard').each(function(index,element) {
      element.reset();
    })
  });
  $('#bold').click(function(event) {
    $('#anteprima').val($('#anteprima').val()+('<b></b>'));
  });
  $('#italic').click(function(event) {
    $('#anteprima').val($('#anteprima').val()+('<i></i>'));
  });
  $('#puntato').click(function(event) {
    $('#anteprima').val($('#anteprima').val()+('<ul><li></li></ul>'));
  });
});
