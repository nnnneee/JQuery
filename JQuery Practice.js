$(document).ready(function() {
    $("#show-password").change(function(){
        $(this).prop("checked")?  $("#upassword").prop("type", "text") : $("#upassword").prop("type", "password");    
    });
});
$('#accept').click(function() {
    if ($('#submitbtn').is(':disabled')) {
        $('#submitbtn').removeAttr('disabled');
    } else {
        $('#submitbtn').attr('disabled', 'disabled');
    }
});
$("p").bind("click", function(){
    $( "<div>This is a click Event</div>").appendTo( "body" );
 });
 
 $("p").bind("dblclick", function(){
    $( "<div>This is a double-click Event</div>"  ).appendTo( "body" );
 });
 $('body').css('background-image', 'url("imges.jpeg")');
 var maxLength = 15;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});
  
  