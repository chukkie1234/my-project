const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");
const submitButton = document.querySelector('button[type="submit"]');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // TOAST NOTIFICATION
  function showToast(message, type = "success") {
      const toast = document.createElement("div");
      toast.className = ` toast ${type}`;
      toast.textContent = message;

      document.body.appendChild(toast);

      setTimeout(() => {
          toast.classList.add("show");
      }, 100);

      setTimeout(() => {
          toast.remove();
      }, 3000);
  }

form.addEventListener("submit", function (e) {

    e.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    // Remove previous validation styles
    nameInput.classList.remove("input-error", "input-success");
    emailInput.classList.remove("input-error", "input-success");
    messageInput.classList.remove("input-error", "input-success");

    let isValid = true;

    // NAME VALIDATION
    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required";

        nameInput.classList.add("input-error");

        isValid = false;

    } else {

        nameInput.classList.add("input-success");

    }

    // EMAIL VALIDATION
    if (emailInput.value.trim() === "") {

        emailError.textContent = "Email is required";

        emailInput.classList.add("input-error");

        isValid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent = "Enter a valid email";

        emailInput.classList.add("input-error");

        isValid = false;

    } else {

        emailInput.classList.add("input-success");

    }

    // MESSAGE VALIDATION
    if (messageInput.value.trim() === "") {

        messageError.textContent = "Message is required";

        messageInput.classList.add("input-error");

        isValid = false;

    } else {

        messageInput.classList.add("input-success");

    }

    // SUCCESS
    if (isValid) {

    // Change button to loading state
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    // Wait for a short moment
    setTimeout(function () {

        // Show success message
        successMessage.textContent = "Message sent successfully!";
        successMessage.classList.add("success");
        showToast("Message sent successfully!", "success");

        // Change button to success state
        submitButton.textContent = "✓ Message Sent!";

        // Reset the form
        form.reset();

        // Remove success borders after resetting
        nameInput.classList.remove("input-success");
        emailInput.classList.remove("input-success");
        messageInput.classList.remove("input-success");

        // Return button to normal state
        setTimeout(function () {
            submitButton.textContent = "Send Message";
            submitButton.disabled = false;
        }, 2000);

    }, 1000);
}

});