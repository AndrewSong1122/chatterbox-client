var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: (message) => {
    // use the underscore render method on message
    var html = '';
    html += MessageView.render(message);

    // append to #chats
    $('#chats').append(html);
    // $('.username').addClass(message.username);
    $('.username').on('click', () => {
      Friends.names[message.username] = message.username;
      Friends.toggleStatus();
    });

  }


};