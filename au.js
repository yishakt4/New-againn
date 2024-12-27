document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    const confirmationMessage = `
        Thank you, ${name}! Your booking is confirmed.
        <br>Email: ${email}
        <br>Check-In Date: ${checkin}
        <br>Check-Out Date: ${checkout}
        <br>Number of Guests: ${guests}
    `;

    document.getElementById("confirmationMessage").innerHTML = confirmationMessage;
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("bookingForm").reset();
});
