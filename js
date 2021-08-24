var header= document.querySelector('header');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    header.classList.add('bg-dark', 'shadow');
  } else {
    header.classList.remove('bg-dark', 'shadow');
  }
});
