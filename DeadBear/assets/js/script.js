const Header = document.getElementById("header");
const logo = document.getElementById("logo");
const Links = document.getElementsByClassName('nav__links');

Header.addEventListener("mouseenter", (event) => {
    logo.classList.remove('logo__name');
    logo.classList.add('hover__logo');
});
Header.addEventListener("mouseleave", (event) => {
    logo.classList.remove('hover__logo');
    logo.classList.add('logo__name');
});

//=========================== Nav Menu  =====================

const navMenu = document.getElementById('nav_list');
      navToggle = document.getElementById('nav-toggle');
      navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click',()=>{
          navMenu.classList.add('show-menu')
        });
      }
      if(navClose){
        navClose.addEventListener('click',()=>{
          navMenu.classList.remove('show-menu')
        });
      }