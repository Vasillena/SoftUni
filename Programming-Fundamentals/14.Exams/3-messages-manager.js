function messagesManager(input) {
  let capacity = Number(input.shift());
  let users = {};
  let command = input.shift().split("=");

  while (command[0] !== "Statistics") {
    switch (command[0]) {
      case "Add":
        let name = command[1];
        let sent = Number(command[2]);
        let received = Number(command[3]);
        if (!users[name]) {
          users[name] = {
            sent: sent,
            received: received,
          };
        }
        break;
      case "Message":
        let sender = command[1];
        let receiver = command[2];
        if (users.hasOwnProperty(sender) && users.hasOwnProperty(receiver)) {
          users[sender].sent += 1;
          users[receiver].received += 1;
          if (users[sender].sent + users[sender].received >= capacity) {
            console.log(`${sender} reached the capacity!`);
            delete users[sender];
          }
          if (users[receiver].sent + users[receiver].received >= capacity) {
            console.log(`${receiver} reached the capacity!`);
            delete users[receiver];
          }
        }
        break;
      case "Empty":
        let target = command[1];
        if (users.hasOwnProperty(target)) {
          delete users[target];
        }
        if (target == "All") {
          for (let user in users) {
            delete users[user];
          }
        }
        break;
    }

    command = input.shift().split("=");
  }
  console.log(`Users count: ${Object.keys(users).length}`);
  for (let user in users) {
    let totalMessages = users[user].sent + users[user].received;
    console.log(`${user} - ${totalMessages} `);
  }
}
messagesManager(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"]); 
messagesManager([
  "20",
  "Add=Mark=3=9",
  "Add=Berry=5=5",
  "Add=Clark=4=0",
  "Empty=Berry",
  "Add=Blake=9=3",
  "Add=Michael=3=9",
  "Add=Amy=9=9",
  "Message=Blake=Amy",
  "Message=Michael=Amy",
  "Statistics",
]);
messagesManager([
  "12",
  "Add=Bonnie=3=5",
  "Add=Johny=4=4",
  "Empty=All",
  "Add=Bonnie=3=3",
  "Statistics",
]);
