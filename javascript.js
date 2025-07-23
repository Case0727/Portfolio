// Typed JavaScript
var typed = new Typed('#element', {
  strings: [`<h4>I'm a Full Stack Developer</h4>`],
  typeSpeed: 50,
  showCursor: false,
});


// Scroll Animation for Skills
const skillItems = document.querySelectorAll(".skill-item");

const showSkills = () => {
  const triggerBottom = window.innerHeight * 0.8;
  skillItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", showSkills);

// Trigger animation on load
document.addEventListener("DOMContentLoaded", showSkills);
const Navbar = document.querySelector(".navbar");
const section = document.querySelectorAll("section");
const navlink = document.querySelectorAll("header nav a");
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top > offset && top < offset + height) {
      sec.classList.add("start-animation");
      navlink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menubar.classList.remove("bx-x");
  Navbar.classList.remove("active");
};

// nav bar responsive

console.log("menu-btn: ", document.getElementById("menu-btn"));
document.getElementById("menu-btn").addEventListener("click", function (e) {
  document.querySelector(".navbar").classList.add("active");
  document.getElementById("close-btn").classList.add("display-close-btn");
  document.getElementById("close-btn").style.display = "block";
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.querySelector(".navbar").classList.remove("active");
  document.getElementById("close-btn").classList.remove("display-close-btn");
  document.getElementById("close-btn").style.display = "none";
});

// Scroll TOp

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const element = document.querySelector(".scroll-top");
  console.log(element);
  console.log(scrollPosition);
  if (window.scrollY >= 200) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
});

// Email Intergration
emailjs.init("-fI1LOrABKcwQQmjj"); // Replace with your valid public key

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_69xkdhb", "template_myiqwc9", this)
      .then(function(response) {
          alert("Email sent successfully!");
          document.getElementById("contact-form").reset();
      }, function(error) {
          alert("Failed to send email.");
          console.log("EmailJS error:", error);
          console.log("Response:", response);
      });
});


// Dark Mode and Light Mode
const themeToggleButton = document.getElementById('theme-toggle');

// Check the user's current theme preference
if (localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme')) {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggleButton.textContent = '🌞'; // Change icon to light mode
} else {
  document.documentElement.removeAttribute('data-theme');
  themeToggleButton.textContent = '🌙'; // Default is light mode
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    themeToggleButton.textContent = '🌙'; // Switch to light mode
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleButton.textContent = '🌞'; // Switch to dark mode
    localStorage.setItem('theme', 'dark');
  }
});
