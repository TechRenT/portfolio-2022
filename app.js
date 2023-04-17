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

// Set active class on Desktop menu items
const desktopMenuItems = document.querySelectorAll('.header__nav-desktop li a');
console.log(desktopMenuItems);

for (let i = 0; i < desktopMenuItems.length; i++) {
  desktopMenuItems[i].addEventListener("click", function(e) {
    let current = document.querySelectorAll(".header__nav-desktop li a.active");
    console.log(current);
    current[0].classList.remove("active");
    e.target.classList.add("active");
  });
}

// Set active class on Mobile menu items
const mobileMenuItems = document.querySelectorAll('.header__nav-mobile li a');
console.log(mobileMenuItems);

for (let i = 0; i < mobileMenuItems.length; i++) {
  mobileMenuItems[i].addEventListener("click", function(e) {
    let current = document.querySelectorAll(".header__nav-mobile li a.active");
    console.log(current);
    current[0].classList.remove("active");
    e.target.classList.add("active");
  });
}

// Duplicate logo list on the Tech Stack Section if the screen size is less than 1200px
if (window.innerWidth < 1200) {
  let copy = document.querySelector(".tech-stack__icons").cloneNode(true);
  document.querySelector(".tech-stack__icon-divs").appendChild(copy);
}