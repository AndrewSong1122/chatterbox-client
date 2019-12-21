var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: (message) => {
    // use the underscore render method on message
    if (message.username === undefined) {
      message.username = 'anonymous';
    }

    if (message.text === undefined) {
      message.text = 'say something';
    }
    var html = '';
    html += MessageView.render(message);


    // append to #chats
    $('#chats').append(html);
    // $(`.username.${message.username}`).on('click', () => {
    //   Friends.names[message.username] = message.username;
    //   Friends.toggleStatus();

    // });

  }

  // mochapls: (obj) => {
  //   console.log($(obj).text());
  // }

};