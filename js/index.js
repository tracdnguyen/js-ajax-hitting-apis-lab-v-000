// your code here
function getRepositories(){
  const req = new XMLHttpRequest();
  const username = document.getElementById('username').value;
  req.addEventListener('load', displayRepositories);
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send();
}

function displayRepositories(){
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList =
    '<ul>' +
      repos.map(r => {
        const dataUsername = 'data-username="' + r.owner.login + '"';
        const dataRepo = 'data-repo="' + r.name + '"';
        return `
          <li>
            ${r.name}
            <a href="${r.html_url}">${r.html_url}</a></br>
            <a href=
          </li`
      })
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(el){
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', )
}
