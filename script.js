const addBtn = document.getElementById("addPatientBtn");
const modal = document.getElementById("patientModal");
const closeModal = document.getElementById("closeModal");
const form = document.getElementById("patientForm");

const table = document.getElementById("appointmentTable");
const tableSection = document.getElementById("appointmentsSection");
const registerCard = document.getElementById("registerCard");

// Load saved patients
let patients = JSON.parse(localStorage.getItem("patients")) || [];

// Load on refresh
window.onload = () => {
  if (patients.length > 0) {
    tableSection.classList.remove("hidden");
    registerCard.style.display = "none";
    patients.forEach(addRow);
  }
};

// Open modal
addBtn.onclick = () => {
  modal.classList.remove("hidden");
};

// Close modal
closeModal.onclick = () => {
  modal.classList.add("hidden");
};

// Submit
form.onsubmit = (e) => {
  e.preventDefault();

  const patient = {
    name: document.getElementById("name").value,
    visit: document.getElementById("visit").value,
    slot: document.getElementById("slot").value
  };

  patients.push(patient);
  localStorage.setItem("patients", JSON.stringify(patients));

  addRow(patient);

  modal.classList.add("hidden");
  tableSection.classList.remove("hidden");
  registerCard.style.display = "none";

  form.reset();
};

function addRow(patient) {
  table.innerHTML += `
    <tr>
      <td>${patient.slot}</td>
      <td>${patient.name}</td>
      <td>${patient.visit}</td>
      <td>Dr. Kailash</td>
      <td><span class="status waiting">Waiting</span></td>
    </tr>
  `;
}
