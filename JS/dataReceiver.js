const searchInput = document.querySelector("#search-bar");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", e => {
  const user = searchInput.value;
  console.log(user);
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
  console.log(response);
  console.log(user);

  if (response.status === 200) {
    const userRepos = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    console.log(userRepos);
    const repos = await userRepos.json();
    console.log(repos);

    const data = {
      user,
      repos
    };
    console.log(data);
  } else {
    console.log("error");
  }
};
