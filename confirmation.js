document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const doctorName = params.get("doctor");

    if (doctorName) {
        showConfirmation(doctorName);
    }
});

function showConfirmation(doctorName) {
    const confirmationMessage = document.createElement("div");
    confirmationMessage.classList.add("confirmation-message");
    confirmationMessage.innerHTML = `
        <h2>Confirmation</h2>
        <p>Do you want to book an appointment with Dr. ${doctorName}?</p>
        <button id="confirmButton">Yes</button>
        <button id="cancelButton">No</button>
    `;

    document.body.appendChild(confirmationMessage);

    const confirmButton = document.getElementById("confirmButton");
    const cancelButton = document.getElementById("cancelButton");

    confirmButton.addEventListener("click", function () {
        // Handle booking confirmation logic here
        showBookingConfirmed(doctorName);
    });

    cancelButton.addEventListener("click", function () {
        // Redirect back to welcome.html or any other action on cancel
        window.location.href = "welcome.html";
    });
}

function showBookingConfirmed(doctorName) {
    const confirmationMessage = document.querySelector(".confirmation-message");
    confirmationMessage.innerHTML = `
        <h2>Congratulations!</h2>
        <p>Your booking with Dr. ${doctorName} has been confirmed.</p>
        <p>Thank you for choosing our service.</p>
    `;
}
