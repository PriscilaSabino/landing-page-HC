const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
let email = document.getElementById('email').value;
 console.log(email)
let data = {
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  document.getElementById('res').innerHTML = 'Cadastro realizado com sucesso!'
})
