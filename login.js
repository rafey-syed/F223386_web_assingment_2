function validateLoginForm() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return false;
  }

  if (!password || password.length < 6) {
    alert("Password must be at least 6 characters long.");
    passwordInput.focus();
    return false;
  }

  const adminEmail = "rafeysyed@freshmart.com";
  const adminPassword = "123456789";

  if (email === adminEmail && password === adminPassword) {
    window.location.href = "admin.html";
  } else {
    alert("User does not exist or credentials are incorrect.");
  }

  return false; // Prevent form submission
}
