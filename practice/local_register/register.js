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
  
    // Mobile validation (easy to read)
    if (user.mobile.length !== 10 || isNaN(user.mobile)) {
      alert("Mobile number must be 10 digits.");
      return;
    }
  
    // No need for custom email validation, HTML handles it
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("User Registered Successfully!");
    this.reset();
  });
  