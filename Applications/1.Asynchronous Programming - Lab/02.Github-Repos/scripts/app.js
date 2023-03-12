function loadRepos() {
  const output = document.getElementById("repos");
  const username = document.getElementById("username").value;
  const url = `https://api.github.com/users/${username}/repos`;

  fetch(url)
    .then((response) => {
      if (response.ok == false) {
        console.log(`Error encountered`, response.status, response.statusText);
        throw `${response.status}: ${response.statusText}`;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      output.replaceChildren();
      for (let entry of data) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${entry.html_url}">${entry.full_name}</a>`;
        output.appendChild(li);
      }
    })
    .catch((error) => {
      output.innerHTML = `<p>${error}</p>`;
    });
}
