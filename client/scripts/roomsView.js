var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('button').on('click', Rooms.add);
    //RoomsView.renderRoom('Lobby');
  },

  renderRoom: (name) => {
    $('#chats').empty();
    for (var i = 0; i < Messages.posts.length; i++) {
      if (Messages.posts[i].roomname === name) {
        MessagesView.renderMessage(Messages.posts[i]);
      }
    }


    if (!Rooms.name.hasOwnProperty(name)) {
      $('select').append(`<option value=${name}>${name}</option>`);
    }
    // $(`option .${name}`).on('click', RoomsView.renderRoom(`${name}`));
    Rooms.name[name] = name;
    App.room = name;
  },



};
