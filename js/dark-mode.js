// ==========================================
// BLOGIFY - DARK MODE
// ==========================================

// Get the dark mode button
const darkModeToggle = document.getElementById("darkModeToggle");

// Check if dark mode was previously enabled
const savedMode = localStorage.getItem("darkMode");

// If dark mode was saved, turn it on
if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
}


// ==========================================
// DARK MODE BUTTON
// ==========================================

if (darkModeToggle) {

    // Set the correct icon when the page loads
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "☀️";
    } else {
        darkModeToggle.textContent = "🌙";
    }


    // When the button is clicked
    darkModeToggle.addEventListener("click", function () {

        // Turn dark mode ON/OFF
        document.body.classList.toggle("dark-mode");


        // Check whether dark mode is currently active
        if (document.body.classList.contains("dark-mode")) {

            // Save dark mode
            localStorage.setItem("darkMode", "enabled");

            // Change button icon
            darkModeToggle.textContent = "☀️";

        } else {

            // Remove saved dark mode
            localStorage.setItem("darkMode", "disabled");

            // Change button icon
            darkModeToggle.textContent = "🌙";
        }

    });

}