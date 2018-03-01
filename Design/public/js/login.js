$(document).ready(function() {
  $('#buttonLogin').click(function(event) {
    event.preventDefault();
    var username = $('#user').val();
    var password = $('#password').val();
    console.log(username+' '+password);
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
