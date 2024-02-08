function validateForm(type) {
  var name = document.getElementById('name') ? document.getElementById('name').value : null;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (type === 'register') {
    if (name && email && password) {
      alert('Cadastro realizado!\nNome: ' + name + '\nEmail: ' + email + '\nSenha: ' + password);
    } else {
      alert('Por favor, preencha todos os campos do formulário de cadastro.');
    }
  } else if (type === 'login') {
    // Lógica de login
    if (email && password) {
      alert('Login validado!\nEmail: ' + email + '\nSenha: ' + password);
    } else {
      alert('Por favor, preencha todos os campos do formulário de login.');
    }
  }
}
function switchForm(formType) {
  if (formType === 'cadastro') {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('cadastroContainer').style.display = 'block';
  } else if (formType === 'login') {
    document.getElementById('cadastroContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
  }
}