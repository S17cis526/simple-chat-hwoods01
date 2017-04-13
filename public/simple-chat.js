var socket = io();
socket.on('welcome', function(data) {
  $('<li>').text(data.message).appendTo('#message-log');
  alert(data.message);
});
socket.on('message', function(data) {
  $('<li>').text(data.message)
  .css('color', message.color)  
  .appendTo('#message-log')
})

$('#chat-send').on('click', function(){
  var text = $('#chat-text').val();
  socket.emit('message', {message: text});
  $('#chat-text').val('');
});

$('#color').on('change', function ()
