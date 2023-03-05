function encodeAndDecodeMessages() {
  let messageFields = Array.from(document.querySelectorAll("textarea"));
  let sendField = messageFields[0];
  let receiveField = messageFields[1];

  let buttons = Array.from(document.querySelectorAll("button"));
  let sendButton = buttons[0];
  let receiveButton = buttons[1];
  let messageArray = [];

  sendButton.addEventListener("click", (e) => {
    let sentMessage = sendField.value;
    for (let i = 0; i < sentMessage.length; i++) {
      let plusCh = sentMessage.charCodeAt(i) + 1;
      let toStr = String.fromCharCode(plusCh);
      messageArray.push(toStr);
    }
    let encodedMessage = messageArray.join("");
    receiveField.value = encodedMessage;
    sendField.value = "";
    messageArray = [];
  });

  receiveButton.addEventListener("click", (e) => {
    let receivedMessage = receiveField.value;
    for (let i = 0; i < receivedMessage.length; i++) {
      let minusCh = receivedMessage.charCodeAt(i) - 1;
      let toStr = String.fromCharCode(minusCh);
      messageArray.push(toStr);
    }
    let decodedMessage = messageArray.join("");
    receiveField.value = decodedMessage;
  });
}
