const userInfo = document.querySelector("#user-info");
const reposInfo = document.querySelector("#repos-info");

const userData = data => {
  userInfo.innerHTML = `
    <img class="avatar" src=${data.avatar_url}'>
    <div class="user-info">    
      <p><i>username: </i>${data.login}</p>
      <h2>${data.name}</h2>
      <p>${data.bio}</p>
    </div>
  `;
};

const reposData = data => {
  console.log(data);
  reposInfo.innerHTML = `
    <h3>Repositories</h3>
    <hr class="strong-separation"><bold></bold>
  `;
  data.forEach(repo => {
    console.log(repo);
    const repoContainer = document.createElement("div");
    repoContainer.className = "repo-info";
    repoContainer.innerHTML = `
      <p>${repo.name}</p>
      <div class="stars-and-forks">
        <p>⭐</p>
        <p>${repo.stargazers_count}</p>
        <p>🍴</p>
        <p>${repo.forks_count}</p>
      <div>
      <hr>
    `;
    reposInfo.appendChild(repoContainer);
  });
};
