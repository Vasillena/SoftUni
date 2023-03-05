function solve() {
  const nameInput = document.getElementById("recipientName");
  const titleInput = document.getElementById("title");
  const messageInput = document.getElementById("message");
  const list = document.getElementById("list");
  const deleted = document.querySelector(".delete-list");
  const sent = document.querySelector(".sent-list");

  document.getElementById("add").addEventListener("click", createMail);
  document.getElementById("reset").addEventListener("click", onReset);

  function createMail(event) {
    event.preventDefault();
    const name = nameInput.value;
    const title = titleInput.value;
    const message = messageInput.value;

    if (name == "" || title == "" || message == "") {
      return;
    }

    const element = document.createElement("li");
    element.innerHTML = `
        <h4>Title: For Work</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`;

    element.querySelector("#send").addEventListener("click", sendMail);
    element.querySelector("#delete").addEventListener("click", deleteMail);

    list.appendChild(element);
    resetInput();

    function sendMail(event) {
      const sentMailElement = document.createElement("li");
      sentMailElement.innerHTML = `<span>To: ${name}</span>
        <span>Title: ${title}</span>
        <div class="btn">
            <button type="submit" class="delete">Delete</button>
        </div>`;

      sentMailElement.querySelector(".delete").addEventListener("click", () => {
        const deletedMailElement = document.createElement("li");
        deletedMailElement.innerHTML = `<span>To: ${name}</span>
       <span>Title: ${title}</span>`;

        deleted.appendChild(deletedMailElement);
        sentMailElement.remove();
      });
      sent.appendChild(sentMailElement);
      element.remove();
    }

    function deleteMail() {
      const deletedMailElement = document.createElement("li");
      deletedMailElement.innerHTML = `<span>To: ${name}</span>
       <span>Title: ${title}</span>`;

      deleted.appendChild(deletedMailElement);
      element.remove();
    }
  }

  function onReset(event) {
    event.preventDefault();
    resetInput();
  }
  function resetInput() {
    nameInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
  }
}
solve();

//event се слага при:
    //-delegation;
    //-form