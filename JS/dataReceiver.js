const searchInput = document.querySelector("#search-bar");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", e => {
  const user = searchInput.value;
  userFinder(user);
});

searchInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    userFinder(searchInput.value);
  }
});

const userFinder = async username => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  if (response.status === 200) {
    const userRepos = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = await userRepos.json();

    userData(user);
    reposData(repos);
  } else {
    // if (document.querySelector(".error-div")) {
    //   errorDiv.remove();
    // }
    const searchContainer = document.querySelector(".container");
    // console.log(searchContainer);
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-div";
    errorDiv.innerHTML = `<p>${username} does not exist!`;
    searchContainer.appendChild(errorDiv);
    setTimeout(() => {
      errorDiv.remove();
    }, 3000);
  }
};
