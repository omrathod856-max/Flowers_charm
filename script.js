const collectionCards = document.querySelectorAll(".collection-grid .card");
const messageBox = document.getElementById("message");

collectionCards.forEach(card => {
  card.addEventListener("click", () => {
    messageBox.textContent = "Out of Stock";
    messageBox.style.display = "block";
    setTimeout(() => (messageBox.style.display = "none"), 2000); // Auto-hide after 2s
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


// Scroll-to-Top Button
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆";
scrollBtn.className = "scroll-top";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Auto Greeting Based on Time of Day
window.addEventListener("load", () => {
  const now = new Date();
  const hours = now.getHours();
  let greeting = "";

  if (hours < 12) greeting = "Good Morning! 🌞";
  else if (hours < 18) greeting = "Good Afternoon! 🌸";
  else greeting = "Good Evening! 🌙";

  const hero = document.querySelector(".hero-content");
  if (hero) {
    const greetMsg = document.createElement("p");
    greetMsg.textContent = greeting;
    greetMsg.style.fontWeight = "500";
    greetMsg.style.color = "#ffeb3b";
    greetMsg.style.fontSize = "1.1rem";
    hero.prepend(greetMsg);
  }
});

// Dynamic Year in Footer
const footer = document.querySelector("footer p");
if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = `&copy; ${year} Flowers Charm. All Rights Reserved.`;
}

// Highlight Active Nav Link Automatically
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  if (window.location.href.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// Dark Mode Toggle
const darkBtn = document.createElement("button");
darkBtn.className = "dark-toggle";
darkBtn.textContent = "🌙";
document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Newsletter Popup
if (!sessionStorage.getItem("newsletterShown")) {
  setTimeout(() => {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
      <div class="popup-content">
        <h3>🌷 Join Our Flower Family!</h3>
        <p>Get exclusive offers and bouquet tips.</p>
        <input type="email" placeholder="Enter your email" id="popupEmail">
        <button id="subscribeBtn">Subscribe</button>
        <button id="closePopup">Close</button>
      </div>`;
    document.body.appendChild(popup);

    document.getElementById("closePopup").onclick = () => popup.remove();
    document.getElementById("subscribeBtn").onclick = () => {
      const email = document.getElementById("popupEmail").value;
      if (email.includes("@")) {
        alert("Thanks for subscribing!");
        popup.remove();
      } else {
        alert("Please enter a valid email!");
      }
    };

    sessionStorage.setItem("newsletterShown", "true");
  }, 1000);
}
