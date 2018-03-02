$(document).ready(function() {
  $('#buttonLogin').click(function(event) {
    event.preventDefault();
    var username = $('#user').val();
    var password = $('#password').val();
    $.post(
      '/login',
      {username: username,password: password},
      function(response){
        if(response){
          document.location.href = '/dashboard';
        }
      }
    );
  });
});
