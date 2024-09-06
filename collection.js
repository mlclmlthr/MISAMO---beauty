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


function handleScroll() {
    const navbar = document.getElementById('navbar');
    const misamoSection = document.getElementById('misamo');
    const scrollPosition = window.scrollY;
  
   
    if (scrollPosition >= misamoSection.offsetTop) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  

  window.addEventListener('scroll', handleScroll);

  
