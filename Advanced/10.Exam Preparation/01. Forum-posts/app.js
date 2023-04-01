window.addEventListener("load", solve);

function solve() {
  const titleField = document.getElementById("post-title");
  const categoryField = document.getElementById("post-category");
  const contentField = document.getElementById("post-content");
  const publishButton = document.getElementById("publish-btn");
  const reviewField = document.getElementById("review-list");
  const uploadedField = document.getElementById("published-list");
  let editButton = document.createElement("button");
  let approveButton = document.createElement("button");
  let clearButton = document.getElementById("clear-btn");
  editButton.textContent = "Edit";
  approveButton.textContent = "Approve";
  editButton.setAttribute("class", "action-btn edit");
  approveButton.setAttribute("class", "action-btn approve");

  publishButton.addEventListener("click", (e) => {
    console.log("test");
    e.preventDefault();
    let title = titleField.value;
    let category = categoryField.value;
    let content = contentField.value;

    if (title == "" || category == "" || content == "") {
      return;
    }
    let reviewList = document.createElement("li");
    reviewList.setAttribute("class", "rpost");
    let article = document.createElement("article");
    let reviewTitle = document.createElement("h4");
    let reviewCategory = document.createElement("p");
    let reviewContent = document.createElement("p");

    reviewTitle.textContent = title;
    reviewCategory.textContent = `Category: ${category}`;
    reviewContent.textContent = `Content: ${content}`;

    article.appendChild(reviewTitle);
    article.appendChild(reviewCategory);
    article.appendChild(reviewContent);
    reviewList.appendChild(article);
    reviewList.appendChild(editButton);
    reviewList.appendChild(approveButton);
    reviewField.appendChild(reviewList);

    titleField.value = "";
    categoryField.value = "";
    contentField.value = "";

    editButton.addEventListener("click", (e) => {
      e.preventDefault();
      titleField.value = reviewTitle.textContent;
      categoryField.value = reviewCategory.textContent.split(": ")[1];
      contentField.value = reviewContent.textContent.split(": ")[1];

      reviewList.remove();
    });
    approveButton.addEventListener("click", (e) => {
      e.preventDefault();
      editButton.remove();
      approveButton.remove();
      uploadedField.appendChild(reviewList);
    });
    clearButton.addEventListener("click", (e) => {
      e.preventDefault();
      reviewList.remove();
    });
  });
}
