var input = document.querySelectorAll('.pswrd');
var show = document.querySelectorAll('.show');

// Add event listeners for each "show" button
show.forEach(function(element, index) {
  element.addEventListener('click', function() {
    togglePasswordVisibility(input[index], element);
  });
});

function togglePasswordVisibility(passwordField, toggleButton) {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.style.color = "#1DA1F2";
    toggleButton.textContent = "HIDE";
  } else {
    passwordField.type = "password";
    toggleButton.textContent = "SHOW";
    toggleButton.style.color = "#111";
  }
}

// Switch between login and signup forms
function switchToSignup() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'block';
}

function switchToLogin() {
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}
