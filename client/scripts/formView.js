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
      roomname: 'random'
    };

    Parse.create(msg);


    console.log('click!');
    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};