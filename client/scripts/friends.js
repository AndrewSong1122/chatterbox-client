var Friends = {
  names: {},
  toggleStatus: () => {
    for (var user in Friends.names) {
      // var select = '.message.'+user;
      $(`.message.${user}`).css('font-weight', 'bold');
      // $(`${select}`).css('font-weight', 'bold');
    }
  },

  addFriend: (obj) => {
    Friends.names[$(obj).text()] = $(obj).text();
    Friends.toggleStatus();
  }

};