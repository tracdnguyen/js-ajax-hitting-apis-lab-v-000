// your code here
function getRepositories(){
  const req = new XMLHttpRequest();
  const username = document.getElementById('username').value
  req.addEventListener('load', listRepos);
  req.open('GET', `https://api.github.com/users/${username}/repos`)
  req.send();
}
