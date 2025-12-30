document.getElementById("loginForm").onsubmit = function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Admin
  if (email === "admin@clinic.com" && password === "admin123") {
    window.location.href = "admin.html";
    return;
  }

  // Doctor
  if (email === "doctor@clinic.com" && password === "doctor123") {
    window.location.href = "doctor.html";
    return;
  }

  // Patient (default)
  window.location.href = "patient.html";
};
