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
  fetch(https://script.google.com/macros/s/AKfycbyjjVQEw5DyQa9OVmmzzDVXzgWg6yZTZ-avalbpJvoJ9mdR9uw1GpPsc8NF72m3BiI/exec, {
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
