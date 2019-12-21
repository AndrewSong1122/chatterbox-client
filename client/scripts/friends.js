var Friends = {
  names: {},
  toggleStatus: () => {
    for (var user in Friends.names) {
      $(`${user}`).css('font-weight', 'bold');
    }
  }

};