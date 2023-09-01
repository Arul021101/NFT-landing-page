const scroll = document.getElementById("scroll");

scroll.addEventListener('click', () => {
  document.querySelector(".get-started").scrollIntoView({ behavior: 'smooth'});

})