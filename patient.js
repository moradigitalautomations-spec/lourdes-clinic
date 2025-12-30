// Load patient data
const patients = JSON.parse(localStorage.getItem("patients")) || [];

if (patients.length > 0) {
  const lastPatient = patients[patients.length - 1];
  document.getElementById("visitType").innerText = lastPatient.visit;
  document.getElementById("visitTime").innerText = lastPatient.slot;
}

// Load clinical summary if available
const summary = localStorage.getItem("clinicalSummary");
if (summary) {
  document.getElementById("summary").value = summary;
}

// Logout
function logout() {
  window.location.href = "login.html";
}
