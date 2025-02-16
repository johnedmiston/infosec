document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (!form || !formMessage) return;

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic form validation
        if (name === "" || email === "" || message === "") {
            showMessage("Please fill in all fields.", "error");
            return;
        }

        // Email validation
        if (!validateEmail(email)) {
            showMessage("Please enter a valid email address.", "error");
            return;
        }

        try {
            // Show loading message
            showMessage("Sending your message...", "info");

            // Execute reCAPTCHA and get token
            const token = await grecaptcha.execute(
                '6Lc6qNcqAAAAAFs_dDeD1I2oIfpYAMi7yI_umK5S',
                {action: 'submit'}
            );

            // Send form data with reCAPTCHA token
            const response = await fetch("https://formspree.io/f/xgvonorw", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    "g-recaptcha-response": token
                })
            });

            if (response.ok) {
                showMessage("Your message has been sent successfully!", "success");
                form.reset();
            } else {
                showMessage("Oops! Something went wrong. Please try again later.", "error");
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage("Network error. Please check your connection.", "error");
        }
    });

    // Function to display feedback messages to the user
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = type;
        formMessage.style.display = "block";

        // Remove the message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = "none";
            formMessage.className = "hidden";
        }, 5000);
    }

    // Email validation helper function
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});