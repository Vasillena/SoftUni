window.addEventListener("load", solve);

function solve() {
  const productField = document.getElementById("type-product");
  const descriptionField = document.getElementById("description");
  const nameField = document.getElementById("client-name");
  const phoneField = document.getElementById("client-phone");
  const sendButton = document.querySelector('button[type="submit"]');
  const receivedField = document.getElementById("received-orders");
  const completedField = document.getElementById("completed-orders");
  const clearButton = document.querySelector("button.clear-btn");

  sendButton.addEventListener("click", (e) => {
    e.preventDefault();
    const product = productField.value;
    const description = descriptionField.value;
    const name = nameField.value;
    const phone = phoneField.value;

    if (description == "" || name == "" || phone == "") {
      return;
    }
    let div = document.createElement("div");
    div.setAttribute("class", "container");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let startButton = document.createElement("button");
    startButton.setAttribute("class", "start-btn");
    startButton.textContent = "Start repair";
    let finishButton = document.createElement("button");
    finishButton.setAttribute("class", "finish-btn");
    finishButton.textContent = "Finish repair";
    finishButton.disabled = true;

    h2.textContent = `Product type for repair: ${product}`;
    h3.textContent = `Client information: ${name}, ${phone}`;
    h4.textContent = `Description of the problem: ${description}`;

    productField.value = "";
    descriptionField.value = "";
    nameField.value = "";
    phoneField.value = "";

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(startButton);
    div.appendChild(finishButton);
    receivedField.appendChild(div);

    startButton.addEventListener("click", (e) => {
      e.preventDefault();
      startButton.disabled = true;
      finishButton.disabled = false;
    });
    finishButton.addEventListener("click", (e) => {
      startButton.remove();
      finishButton.remove();
      completedField.appendChild(div);
    });
    clearButton.addEventListener("click", (e) => {
      e.preventDefault();
      completedField.innerHTML = "";
    //   let allDivs = Array.from(document.querySelectorAll("div.container"));
    //   for (div of allDivs) {
    //     div.remove();
    //   }
    });
  });
}
