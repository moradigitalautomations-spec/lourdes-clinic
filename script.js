/* ================= INIT ANIMATIONS ================= */
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (smooth, calm animations)
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }
});

/* ================= FUTURE HOOKS ================= */

/*
  NOTE:
  -----
  We are intentionally keeping JS minimal for now.
  This is a PROFESSIONAL decision.

  What will be added later here:
  - Walk-in patient form submission
  - Saving data to backend / Google Sheet
  - Updating appointments table dynamically
  - Role-based login redirect
  - AI clinical summary generation (Doctor Portal)

  Keeping this file clean now avoids technical debt.
*/

/* ================= UI PLACEHOLDERS ================= */

// Example: click handler for "Add Patient" button
const addPatientBtn = document.querySelector(".primary-action button");

if (addPatientBtn) {
  addPatientBtn.addEventListener("click", () => {
    alert("Walk-in Patient Form will open here.");
  });
}
