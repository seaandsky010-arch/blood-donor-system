function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "asn" && password === "blood@123") {
    localStorage.setItem("adminLoggedIn", "true");

    // ✅ admin.html is in SAME folder
    window.location.href = "admin.html";
  } else {
    alert("Invalid admin credentials");
  }
}