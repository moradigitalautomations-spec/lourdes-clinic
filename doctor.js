function openConsultation(name) {
  document.getElementById("consultation").classList.remove("hidden");
  document.getElementById("patientName").innerText = "Patient: " + name;
}

function generateSummary() {
  const notes = document.getElementById("notes").value;

  if (!notes.trim()) {
    alert("Please enter clinical notes first");
    return;
  }

  // Mock AI summary (later replaced with real AI)
  const summary =
    "Clinical Summary:\n" +
    "- Symptoms documented\n" +
    "- Observations noted\n" +
    "- No emergency indicators\n";

  document.getElementById("summary").value = summary;
}

function completeConsultation() {
  alert("Consultation marked as completed");
  document.getElementById("consultation").classList.add("hidden");
}
