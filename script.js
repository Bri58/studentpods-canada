document.getElementById("joinForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const student = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    country: document.getElementById("country").value,
    city: document.getElementById("city").value,
    goal: document.getElementById("goal").value,
    joinedAt: new Date().toISOString()
  };

  // For the free starter version, this saves signups inside the browser.
  // Later, we will connect this to Firebase so signups are stored online.
  const existingStudents = JSON.parse(localStorage.getItem("studentpods_signups")) || [];
  existingStudents.push(student);
  localStorage.setItem("studentpods_signups", JSON.stringify(existingStudents));

  document.getElementById("formMessage").textContent =
    "Thank you for joining the beta! Your Pod invitation will be sent soon.";

  document.getElementById("joinForm").reset();
});

function showPremiumMessage() {
  alert("StudentPods Plus is coming soon. Join the beta first and we will notify you.");
}
