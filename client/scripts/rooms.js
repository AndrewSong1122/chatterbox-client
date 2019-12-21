var Rooms = {
  name: {},

  add: () => {

    var roomName = prompt('What is the room name?');
    if (!roomName) {
      return;
    }
    RoomsView.renderRoom(roomName);

  }

};