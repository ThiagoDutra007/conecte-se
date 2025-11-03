document.addEventListener('DOMContentLoaded', () => {
  // Seleção de elementos
  const btnLogin = document.getElementById('btn-login');
  const btnRegister = document.getElementById('btn-register');
  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');
  const cardTitle = document.getElementById('card-title');
  const cardSub = document.getElementById('card-sub');
  const linkToLogin = document.querySelectorAll('#link-to-login'); // temos 2 links

  // Função para mostrar formulário de Login
  function showLogin() {
    btnLogin.classList.add('active');
    btnLogin.setAttribute('aria-pressed', 'true');
    btnRegister.classList.remove('active');
    btnRegister.setAttribute('aria-pressed', 'false');

    formRegister.classList.remove('active');
    formLogin.classList.add('active');

    cardTitle.textContent = 'Entrar';
    cardSub.textContent = 'Acesse sua conta para começar a conectar.';
  }

  // Função para mostrar formulário de Cadastro
  function showRegister() {
    btnRegister.classList.add('active');
    btnRegister.setAttribute('aria-pressed', 'true');
    btnLogin.classList.remove('active');
    btnLogin.setAttribute('aria-pressed', 'false');

    formLogin.classList.remove('active');
    formRegister.classList.add('active');

    cardTitle.textContent = 'Criar Conta';
    cardSub.textContent = 'Faça seu cadastro e junte-se à comunidade.';
  }

  // Eventos dos botões
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
  });

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    showRegister();
  });

  // Links “Voltar ao login” no formulário de cadastro
  linkToLogin.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showLogin();
    });
  });

  // Tratamento do submit do Login
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = formLogin.username.value.trim();
    const password = formLogin.password.value;

    if (!username || !password) {
      return alert('Preencha usuário e senha.');
    }

    console.log('Login:', { username, password });
    alert('Login simulado! Veja os dados no console.');
  });

  // Tratamento do submit do Cadastro
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullname = formRegister.fullname.value.trim();
    const username = formRegister.username.value.trim();
    const email = formRegister.email.value.trim();
    const password = formRegister.password.value;

    if (!fullname || !username || !email || password.length < 6) {
      return alert('Preencha todos os campos corretamente (senha mínimo 6 caracteres).');
    }

    console.log('Cadastro:', { fullname, username, email, password });
    alert('Cadastro simulado! Veja os dados no console.');

    // Voltar ao login após cadastro
    showLogin();
    formRegister.reset();
  });

  // Teste rápido para garantir que o JS carregou
  console.log("✅ Script carregado com sucesso!");
});

