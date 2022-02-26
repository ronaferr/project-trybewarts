const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnLogin = document.querySelector('#btn-login');
const btnSend = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');


btnLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value == '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

btnSend.disabled = true;

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    btnSend.disabled = false;
  } else {
    btnSend.disabled = true;
  }
  
})
