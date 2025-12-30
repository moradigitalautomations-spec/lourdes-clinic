document.getElementById("loginForm").onsubmit = function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Admin login
  if (email === "admin@clinic.com" && password === "admin123") {
    window.location.href = "admin.html";
    return;
  }

  // Doctor login
  if (email === "doctor@clinic.com" && password === "doctor123") {
    window.location.href = "doctor.html";
    return;
  }

  // Patient login (default)
  window.location.href = "patient.html";
};
