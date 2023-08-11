const xhttp = new XMLHttpRequest();
const endpoint = 'https://api.github.com/users/ecblandy';

try {
  xhttp.open('GET', endpoint, true);
  xhttp.responseType = 'json';
  
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const respostaServidor = xhttp.response;
      try {
        pegarDados(respostaServidor);
      } catch (error) {
        console.error('Erro ao manipular dados:', error);
      }
    }
  };
  
  xhttp.send();
} catch (error) {
  console.error('Erro ao fazer a requisição:', error);
}

function pegarDados(dados) {
  document.querySelector('.profile-avatar').src = dados.avatar_url;
  document.querySelector('.profile-name').textContent = dados.name;
  document.querySelector('.profile-username').textContent = `@${dados.login}`;
  document.getElementById('repositorios').textContent = dados.public_repos;
  document.getElementById('seguidores').textContent = dados.followers;
  document.getElementById('seguindo').textContent = dados.following;
  document.querySelector('.profile-link').href = dados.html_url;
}

