var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var msgText = $('#message').val();
    var msg = {
      username: App.username,
      text: msgText,
      roomname: App.room
    };

    Parse.create(msg);

    // RoomsView.renderRoom(App.room);

    console.log($('#message').val());
    $('#message').val('');

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};