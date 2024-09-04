const Header = document.getElementById("mainNavbar");
const logo = document.getElementById("logo");
const Links = document.getElementsByClassName('nav__links');

Header.addEventListener("mouseenter", (event) => {
    logo.classList.remove('logo__name')
    logo.classList.add('hover__logo');
});
Header.addEventListener("mouseleave", (event) => {
    logo.classList.remove('hover__logo');
    logo.classList.add('logo__name');
});

//=========================== Nav Menu  =====================

const navMenu = document.getElementById('nav_list');
      navToggle = document.getElementById('nav-toggle');
      navClose = document.getElementById('nav-close');

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

      //=========================== cart Menu  =====================

const cartMenu = document.getElementById('Cart__Container');
cartToggle = document.getElementById('cart-toggle');
cartClose = document.getElementById('cart-close');

if(cartToggle){
  cartToggle.addEventListener('click',()=>{
    cartMenu.classList.add('showCart__Menu')
  });
}
if(cartClose){
  cartClose.addEventListener('click',()=>{
    cartMenu.classList.remove('showCart__Menu')
  });
}
      //=========================== Search Box  =====================

      const SearchBox = document.getElementById('searchBox');
      SearchToggle = document.getElementById('Search-Toggle');
      SearchClose = document.getElementById('Search-close');
      
      if(SearchToggle){
        SearchToggle.addEventListener('click',()=>{
          SearchBox.classList.add('DisplaySearch')
        });
      }
      if(SearchClose){
        SearchClose.addEventListener('click',()=>{
          SearchBox.classList.remove('DisplaySearch')
        });
      }

      function changebg(){
        var navbar = document.getElementById('mainNavbar');
        var Logo = document.getElementById('logo');
        var ScrollValue = window.scrollY;
        if(ScrollValue < 150){
             navbar.classList.remove('ScrollColor');
             Logo.classList.remove('LogoScroll');
         } 
          else{
           navbar.classList.add('ScrollColor');
           Logo.classList.add('LogoScroll');
        }
      }
      
      window.addEventListener('scroll', changebg);