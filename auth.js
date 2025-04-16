document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const message = document.getElementById("signupMessage");

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // Send to Google Sheet
  fetch("PASTE_YOUR_WEB_APP_URL_HERE", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  message.textContent = "Account created successfully!";
  message.style.color = "green";

  // Optional: Save locally too
  localStorage.setItem("user", JSON.stringify({ username, password }));

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
});
