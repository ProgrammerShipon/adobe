$(document).ready(function(){
  $(".bars").click(function(){
    $(".nav").slideToggle("slow");
  });
});



const nav = document.querySelector('nav');
const main_content = document.querySelector('.body-content');

const options = {
  rootMargin: '-11%'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.classList.remove('changeBackground');
    } else {
      nav.classList.add('changeBackground');
    }
  })
}, options)

observer.observe(main_content)