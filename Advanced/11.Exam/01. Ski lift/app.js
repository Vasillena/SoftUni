window.addEventListener("load", solve);

function solve() {
  const fNameField = document.getElementById("first-name");
  const lNameField = document.getElementById("last-name");
  const peopleField = document.getElementById("people-count");
  const dateField = document.getElementById("from-date");
  const daysField = document.getElementById("days-count");
  const submitButton = document.getElementById("next-btn");

  const ul = document.querySelector(".ticket-info-list");
  const ul2 = document.querySelector(".confirm-ticket");

  const main = document.getElementById("main");
  const body = document.getElementById("body");

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.setAttribute("class", "edit-btn");

  const continueButton = document.createElement("button");
  continueButton.textContent = "Continue";
  continueButton.setAttribute("class", "continue-btn");

  const confirmButton = document.createElement("button");
  confirmButton.textContent = "Confirm";
  confirmButton.setAttribute("class", "confirm-btn");

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.setAttribute("class", "cancel-btn");

  const backButton = document.createElement("button");
  backButton.textContent = "Back";
  backButton.setAttribute("id", "back-btn");

  const h1 = document.createElement("h1");
  h1.setAttribute("id", "thank-you");
  h1.textContent = "Thank you, have a nice day!";

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let fName = fNameField.value;
    let lName = lNameField.value;
    let people = Number(peopleField.value);
    let date = dateField.value;
    let days = Number(daysField.value);

    if (
      fName == "" ||
      lName == "" ||
      people == "" ||
      date == "" ||
      days == ""
    ) {
      return;
    }
    let li = document.createElement("li");
    li.setAttribute("class", "ticket");
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    let pDate = document.createElement("p");
    let pDays = document.createElement("p");
    let pPeople = document.createElement("p");

    h3.textContent = `Name: ${fName} ${lName}`;
    pDate.textContent = `From date: ${date}`;
    pDays.textContent = `For ${days} days`;
    pPeople.textContent = `For ${people} people`;

    article.appendChild(h3);
    article.appendChild(pDate);
    article.appendChild(pDays);
    article.appendChild(pPeople);
    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(continueButton);
    ul.appendChild(li);

    fNameField.value = "";
    lNameField.value = "";
    peopleField.value = "";
    dateField.value = "";
    daysField.value = "";

    submitButton.disabled = true;

    editButton.addEventListener("click", (e) => {
      e.preventDefault();

      let temp = h3.textContent.split(": ")[1];
      let fullName = temp.split(" ");
      let firstName = fullName[0];
      let lastName = fullName[1];

      fNameField.value = firstName;
      lNameField.value = lastName;
      peopleField.value = pPeople.textContent.split(" ")[1];
      dateField.value = pDate.textContent.split(": ")[1];
      daysField.value = pDays.textContent.split(" ")[1];
      li.remove();
      submitButton.disabled = false;
    });
    continueButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("click");

      editButton.remove();
      continueButton.remove();

      li.appendChild(confirmButton);
      li.appendChild(cancelButton);
      ul2.appendChild(li);
    });
    cancelButton.addEventListener("click", (e) => {
      e.preventDefault();
      li.remove();
      submitButton.disabled = false;
    });
    confirmButton.addEventListener("click", (e) => {
      e.preventDefault();
      main.remove();

      body.appendChild(h1);
      body.appendChild(backButton);
    });
    backButton.addEventListener("click", (e) => {
      location.reload();
    });
  });
}
