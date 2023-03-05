function solve() {
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  function generate(event) {
    let input = JSON.parse(document.querySelector("textarea").value);
    input.forEach((furniture) => {
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.src = furniture.img;
      td1.appendChild(img);
      tr.appendChild(td1);

      let td2 = document.createElement("td");
      let p2 = document.createElement("p");
      p2.textContent = furniture.name;
      td2.appendChild(p2);
      tr.appendChild(td2);

      let td3 = document.createElement("td");
      let p3 = document.createElement("p");
      p3.textContent = Number(furniture.price);
      td3.appendChild(p3);
      tr.appendChild(td3);

      let td4 = document.createElement("td");
      let p4 = document.createElement("p");
      p4.textContent = Number(furniture.decFactor);
      td4.appendChild(p4);
      tr.appendChild(td4);

      let td5 = document.createElement("td");
      let input = document.createElement("input");
      input.type = "checkbox";
      td5.appendChild(input);
      tr.appendChild(td5);

      document.querySelector("tbody").appendChild(tr);
    });
  }

  function buy(event) {
    let checkboxes = Array.from(
      document.querySelectorAll("tbody input")
    ).filter((checkbox) => checkbox.checked);

    let boughtFurniture = [];
    let totalPrice = 0;
    let totalDecorationFactor = 0;

    checkboxes.forEach((checkbox) => {
      let parent = checkbox.parentElement.parentElement;
      let data = Array.from(parent.querySelectorAll("p"));
      boughtFurniture.push(data[0].textContent);
      totalPrice += Number(data[1].textContent);
      totalDecorationFactor += Number(data[2].textContent);
    });

    let output = document.querySelectorAll("textarea")[1];
    output.textContent += `Bought furniture: ${boughtFurniture.join(", ")}\n`;
    output.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    output.textContent += `Average decoration factor: ${
      totalDecorationFactor / checkboxes.length
    }`;
  }
}
