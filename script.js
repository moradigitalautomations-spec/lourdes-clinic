AOS.init({duration:800,once:true});

const modal = document.getElementById("patientModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("patientForm");
const table = document.getElementById("appointmentTable");

openBtn.onclick = () => modal.classList.add("active");
closeBtn.onclick = () => modal.classList.remove("active");

form.onsubmit = e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const visit = document.getElementById("visit").value;
  const slot = document.getElementById("slot").value;

  table.innerHTML += `
    <tr>
      <td>${slot}</td>
      <td>${name}</td>
      <td>${visit}</td>
      <td>Dr. Kailash</td>
      <td><span class="status waiting">Waiting</span></td>
    </tr>
  `;

  form.reset();
  modal.classList.remove("active");
};
