document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    dob: document.getElementById("dob").value,
    gender: document.querySelector('input[name="gender"]:checked')?.value,
    mobile: document.getElementById("mobile").value.trim(),
    email: document.getElementById("email").value.trim()
  };

  // Mobile validation
  if (user.mobile.length !== 10 || isNaN(user.mobile)) {
    alert("Mobile number must be 10 digits.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // ✅ Email uniqueness check
  const emailExists = users.some(u => u.email === user.email);
  if (emailExists) {
    alert("This email is already registered.");
    return;
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  alert("User Registered Successfully!");
  this.reset();
});
