var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username <%-username%>" onClick = "Friends.addFriend(this)"><%-username%></div>
        <div class="message <%-username%>"> <%-text%> </div>
        <div></div>
      </div>

    `),






};