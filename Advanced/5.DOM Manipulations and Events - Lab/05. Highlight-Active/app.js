function focused() {
  let inputElements = document.querySelectorAll("input");
  for (let input of inputElements) {
    input.addEventListener("focus", (e) => {
      e.target.parentElement.classList.add("focused");
    });
    input.addEventListener("blur", (e) => {
      e.target.parentElement.classList.remove("focused");
    });
  }
}
