var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: (message) => {
    var html = '';
    html += MessageView.render(message);
    $('#chats').append(html);
  }


};