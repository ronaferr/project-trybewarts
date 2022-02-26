const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnLogin = document.querySelector('#btn-login');

btnLogin.addEventListener('click', () => {
  const senhaConvert = senha.value;
  if (email.value === 'tryber@teste.com' && senhaConvert === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
