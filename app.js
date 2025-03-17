// Open and close menu on mobile
const openMenu = document.querySelector('.header__menu-icon');
const closeMenu = document.querySelector('.header__close-icon');
const mobileMenu = document.querySelector('.header__nav-mobile');

openMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('hide');
    closeMenu.classList.remove('hide');
    openMenu.classList.add('hide');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hide');
    closeMenu.classList.add('hide');
    openMenu.classList.remove('hide');
});

// Smooth scroll function
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.offsetTop - 70; // Subtract header height
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Easing function
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Handle desktop menu clicks
const desktopMenuItems = document.querySelectorAll('.header__nav-desktop li a');

desktopMenuItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active class from all items and add to clicked item
    desktopMenuItems.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    
    // Get the target section from href
    const targetSection = this.getAttribute('href');
    if (targetSection !== '/') {
      smoothScroll(targetSection, 1000);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// Handle mobile menu clicks
const mobileMenuItems = document.querySelectorAll('.header__nav-mobile li a');

mobileMenuItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active class from all items and add to clicked item
    mobileMenuItems.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    
    // Get the target section from href
    const targetSection = this.getAttribute('href');
    if (targetSection !== '/') {
      // Close mobile menu
      mobileMenu.classList.add('hide');
      closeMenu.classList.add('hide');
      openMenu.classList.remove('hide');
      
      // Scroll to section
      smoothScroll(targetSection, 1000);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// To apply animate from mobile to desktop
let copy = document.querySelector(".tech-stack__icons").cloneNode(true);
document.querySelector(".tech-stack__icon-divs").appendChild(copy);

// Portfolio Tabs
const tabButtons = document.querySelectorAll('.portfolio__tab-btn');
const tabContents = document.querySelectorAll('.portfolio__tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked button and corresponding content
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    document.getElementById(`${tabId}-content`).classList.add('active');
  });
});