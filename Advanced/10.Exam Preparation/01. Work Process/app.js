function solve() {
  const inputValues = Array.from(
    document.getElementById("signup").querySelectorAll("input")
  );
  const hireButton = document.getElementById("add-worker");
  const tableBody = document.getElementById("tbody");
  const budget = document.getElementById("sum");

  hireButton.addEventListener("click", (e) => {
    e.preventDefault();

    let firstName = inputValues[0].value;
    let lastName = inputValues[1].value;
    let email = inputValues[2].value;
    let birth = inputValues[3].value;
    let position = inputValues[4].value;
    let salary = Number(inputValues[5].value);

    if (
      firstName == "" &&
      lastName == "" &&
      email == "" &&
      birth == "" &&
      position == "" &&
      salary == ""
    ) {
      return;
    }
    let tableRow = document.createElement("tr");
    let firstNameCell = document.createElement("td");
    let lastNameCell = document.createElement("td");
    let emailCell = document.createElement("td");
    let birthCell = document.createElement("td");
    let positionCell = document.createElement("td");
    let salaryCell = document.createElement("td");
    let actionCell = document.createElement("td");
    let firedButton = document.createElement("button");
    let editButton = document.createElement("button");

    firstNameCell.textContent = firstName;
    lastNameCell.textContent = lastName;
    emailCell.textContent = email;
    birthCell.textContent = birth;
    positionCell.textContent = position;
    salaryCell.textContent = salary;

    let currentBudget = Number(budget.textContent);
    let totalBudget = currentBudget + salary;
    budget.textContent = totalBudget.toFixed(2);

    for (let input of inputValues) {
      input.value = "";
    }

    editButton.textContent = "Edit";
    // editButton.classList.add("#button");
    editButton.classList.add("edit");
    editButton.addEventListener("click", (e) => {
      const listItems = Array.from(tableRow.childNodes);
      for (let i = 0; i < inputValues.length; i++) {
        inputValues[i].value = listItems[i].textContent;
      }
      currentBudget = Number(budget.textContent);
      totalBudget = currentBudget - salary;
      budget.textContent = totalBudget.toFixed(2);
      tableRow.remove();
    });

    firedButton.textContent = "Fired";
    // firedButton.classList.add("#button");
    firedButton.classList.add("fired");
    firedButton.addEventListener("click", (e) => {
      currentBudget = Number(budget.textContent);
      totalBudget = currentBudget - salary;
      budget.textContent = totalBudget.toFixed(2);
      tableRow.remove();
    });

    actionCell.appendChild(firedButton);
    actionCell.appendChild(editButton);

    tableRow.appendChild(firstNameCell);
    tableRow.appendChild(lastNameCell);
    tableRow.appendChild(emailCell);
    tableRow.appendChild(birthCell);
    tableRow.appendChild(positionCell);
    tableRow.appendChild(salaryCell);
    tableRow.appendChild(actionCell);

    tableBody.appendChild(tableRow);
  });
}
solve();
