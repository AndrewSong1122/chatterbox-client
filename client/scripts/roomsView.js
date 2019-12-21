var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('button').on('click', Rooms.add);
    //RoomsView.renderRoom('Lobby');
    $('select').on('change', () => {
      //on change of the select,
      RoomsView.renderRoom($('select').val());
    });
  },

  renderRoom: (name) => {
    // if name = undefined or emptystring




    $('#chats').empty();
    for (var i = 0; i < Messages.posts.length; i++) {
      if (Messages.posts[i].roomname === name) {
        MessagesView.renderMessage(Messages.posts[i]);
      }
    }


    if (!Rooms.name.hasOwnProperty(name)) {
      $('select').append(`<option id = "${name}" value=${name}>${name}</option>`);
      // $('option').on('click', () => {
      //   $('#chats').empty();
      //   for (var i = 0; i < Messages.posts.length; i++) {
      //     if (Messages.posts[i].roomname === $(`option#${name}`)) {
      //       MessagesView.renderMessage(Messages.posts[i]);
      //     }
      //   }
      // })

    }
    // $(`option .${name}`).on('click', RoomsView.renderRoom(`${name}`));
    Rooms.name[name] = name;
    App.room = name;
    $('select').val(name);
    Friends.toggleStatus();
  },



};
