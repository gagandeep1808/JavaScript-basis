
//=========================== Home Slider =====================
var swiper = new Swiper(".main", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
   loop:true,
  });
  
  //=========================== Nav Menu  =====================
  
  const navMenu = document.getElementById('nav-menu');
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
  
  //=========================== Category =====================
  var swiperCategories = new Swiper(".categories__container", {
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
      }
    });
  //=========================== product  =====================
  const tabs = document.querySelectorAll('[data-target]');
    tabContents = document.querySelectorAll('[content]');
  
    tabs.forEach(tab => {
      tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)
         tabContents.forEach(tabContent => {
          tabContent.classList.remove('active-tab');
         });
         target.classList.add('active-tab');
  
         tabs.forEach(tab => {
          tab.classList.remove('active-tab')
         });
         tab.classList.add('active-tab')
      });
    });
  