'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// Pop up 

function showComingSoon() {
  alert("Product Coming Soon!");
}


function openModal() {
document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
document.getElementById('modalOverlay').style.display = 'none';
}


  // Show the popup after a delay (e.g., 2.5 seconds)
  setTimeout(function() {
    document.getElementById('hiring-popup').style.display = 'block';
    document.getElementById('popup-mask').style.display = 'block';
  }, 2500);

  // Close the popup when the close button is clicked
  document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('hiring-popup').style.display = 'none';
    document.getElementById('popup-mask').style.display = 'none';
  });

  // Close the popup when the mask (background) is clicked
  document.getElementById('popup-mask').addEventListener('click', function() {
    document.getElementById('hiring-popup').style.display = 'none';
    document.getElementById('popup-mask').style.display = 'none';
  });