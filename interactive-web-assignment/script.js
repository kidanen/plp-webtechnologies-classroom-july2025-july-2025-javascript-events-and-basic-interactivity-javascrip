// =========================
// Part 1: Event Handling
// =========================
const toggleBtn = document.getElementById("toggleMessageBtn");
const hiddenMessage = document.getElementById("hiddenMessage");

toggleBtn.addEventListener("click", () => {
  if (hiddenMessage.style.display === "none") {
    hiddenMessage.style.display = "block";
  } else {
    hiddenMessage.style.display = "none";
  }
});

// =========================
// Part 2: Interactive Elements
// =========================

// 1. Light/Dark Mode Toggle
const modeBtn = document.getElementById("modeToggleBtn");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Click Counter Game
let score = 0;
const gameBtn = document.getElementById("gameBtn");
const gameScore = document.getElementById("gameScore");

gameBtn.addEventListener("click", () => {
  score++;
  gameScore.textContent = `Score: ${score}`;
});

// 3. FAQ Section (Collapsible)
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// =========================
// Part 3: Form Validation
// =========================
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload

  let valid = true;

  // Clear previous messages
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("formSuccess").textContent = "";

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // If valid, show success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Signup successful!";
    form.reset();
  }
});
