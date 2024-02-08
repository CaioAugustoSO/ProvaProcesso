function validateForm(type) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var name = document.getElementById('name') ? document.getElementById('name').value : null;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var cademail = document.getElementById('cademail').value;
  var cadpassword = document.getElementById('cadpassword').value;
  var cpf = document.getElementById('cpf').value;
  var phone = document.getElementById('phone').value;


  if (type === 'register') {
    if (!emailRegex.test(cademail)) {
      alert('Por favor, insira um endereço de email válido.');
    }
    else{ 
    if (name && cademail && cadpassword) {
      alert('Cadastro realizado!\nNome: ' + name + '\nEmail: ' + cademail + '\nSenha: ' + cadpassword);
    } else {
      alert('Por favor, preencha todos os campos do formulário de cadastro.');
    }
  }
} 
else if (type === 'login') {
    // Lógica de login

    if (email && password) {
      if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
      }
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