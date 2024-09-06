const trigger_search = document.querySelector('.trigger_search');
const input = document.querySelector('.input');

trigger_search.addEventListener('click', () => {
    if (!input.classList.contains('input-open')) {
        input.classList.add('input-open');
        trigger_search.innerHTML = "<i class='uil uil-times'></i>";
    } else {
        input.classList.remove('input-open');
        trigger_search.innerHTML = "<i class='uil uil-search'></i>";
    }


});


const content = document.querySelector('.content');
const landingPage = document.querySelector('.landing-page');


const updateContentColor = () => {
    const bgImage = window.getComputedStyle(landingPage).backgroundImage;
    
    if (bgImage.includes('sana.jpeg')) {
        content.style.color = 'white';
    } else if (bgImage.includes('mina.jpeg')) {
        content.style.color = 'black';
    }
};

setInterval(updateContentColor, 100);
updateContentColor();


function handleScroll() {
    const navbar = document.getElementById('navbar');
    const trendsSection = document.getElementById('trends');
    const scrollPosition = window.scrollY;
  
   
    if (scrollPosition >= trendsSection.offsetTop) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  

  window.addEventListener('scroll', handleScroll);

  
const trends = document.querySelector('.trends');

let isDown = false;
let startX;
let scrollLeft;

trends.addEventListener('mousedown', (e) => {
    isDown = true;
    trends.classList.add('active');
    startX = e.pageX - trends.offsetLeft;
    scrollLeft = trends.scrollLeft;
});

trends.addEventListener('mouseleave', () => {
    isDown = false;
    trends.classList.remove('active');
});

trends.addEventListener('mouseup', () => {
    isDown = false;
    trends.classList.remove('active');
});

trends.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - trends.offsetLeft;
    const walk = (x - startX) * 1; 
    trends.scrollLeft = scrollLeft - walk;
});

