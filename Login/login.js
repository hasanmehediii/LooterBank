const toggleBtn = document.getElementById('toggle-btn');
const formTitle = document.getElementById('form-title');
const fullnameGroup = document.getElementById('fullname-group');
const submitBtn = document.querySelector('.submit-btn');
const authForm = document.getElementById('auth-form');

let isLogin = true;

toggleBtn.addEventListener('click', () => {
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.textContent = 'Welcome Back';
    fullnameGroup.classList.add('hidden');
    submitBtn.textContent = 'Login';
    toggleBtn.textContent = 'Sign Up';
    toggleBtn.previousSibling.textContent = "Don't have an account?";
  } else {
    formTitle.textContent = 'Create Account';
    fullnameGroup.classList.remove('hidden');
    submitBtn.textContent = 'Sign Up';
    toggleBtn.textContent = 'Login';
    toggleBtn.previousSibling.textContent = 'Already have an account?';
  }
});

authForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (isLogin) {
    alert('Logging in...');
  } else {
    alert('Signing up...');
  }

  // You can replace the alert with real form submission logic later
});
