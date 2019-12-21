var Rooms = {
  name: {},

  add: () => {

    var roomName = prompt('What is the room name?');
    if (!roomName) {
      return;
    }
    RoomsView.renderRoom(roomName);

    if (!Rooms.name.hasOwnProperty(roomName)) {
      $('select').append(`<option id = "${roomName}" value=${roomName}>${roomName}</option>`);
    }


  }

};