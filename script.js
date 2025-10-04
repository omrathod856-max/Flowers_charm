const collectionCards = document.querySelectorAll(".collection-grid .card");
const messageBox = document.getElementById("message");

collectionCards.forEach(card => {
  card.addEventListener("click", () => {
    messageBox.textContent = "Out of Stock";
    messageBox.style.display = "block";
  });
});


function validateEntries() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value;

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Invalid email address. Please include '@' and '.' characters.");
        emailInput.focus();
        return false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Invalid phone number. Please enter a valid 10-digit number with no characters.");
        phoneInput.focus();
        return false;
    }

    alert("Details are valid! Sending message...");
    return true;
}