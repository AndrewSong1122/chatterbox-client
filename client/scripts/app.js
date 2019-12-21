var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  room: 'Lobby',


  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();



    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    setInterval(() => {
      App.fetch();
      RoomsView.renderRoom(App.room);
    }, 100);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      //push to Messages
      Messages.posts = (data.results);

      callback();
    });


  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
