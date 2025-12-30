const addBtn = document.getElementById("addPatientBtn");
const modal = document.getElementById("patientModal");
const closeModal = document.getElementById("closeModal");
const form = document.getElementById("patientForm");

const table = document.getElementById("appointmentTable");
const tableSection = document.getElementById("appointmentsSection");
const registerCard = document.getElementById("registerCard");

// Open modal
addBtn.onclick = () => {
  modal.classList.remove("hidden");
};

// Close modal
closeModal.onclick = () => {
  modal.classList.add("hidden");
};

// Submit form
form.onsubmit = (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const visit = document.getElementById("visit").value;
  const slot = document.getElementById("slot").value;

  modal.classList.add("hidden");
  tableSection.classList.remove("hidden");

  table.innerHTML += `
    <tr>
      <td>${slot}</td>
      <td>${name}</td>
      <td>${visit}</td>
      <td>Dr. Kailash</td>
      <td><span class="status waiting">Waiting</span></td>
    </tr>
  `;

  registerCard.style.display = "none";
  form.reset();

  /* 🔜 LATER:
     Here we will send data to Excel / Google Sheets
     using fetch() + webhook (n8n / Apps Script)
  */
};

