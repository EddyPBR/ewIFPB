$('a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset
      // scrollTop: targetOffset - 65
  }, 800);
});

/* back to menu */
var arrowToMenu = document.querySelector('.arrowToMenu');
window.addEventListener('scroll', function() {
  if(window.pageYOffset > arrowToMenu.offsetTop) {
    arrowToMenu.style.display = "block";
    arrowToMenu.classList.remove('animated');
    arrowToMenu.classList.remove('bounceOutRight');
    arrowToMenu.classList.add('bounceInRight');
    arrowToMenu.classList.add('animated');
  } else {
    arrowToMenu.classList.remove('bounceInRight');
    arrowToMenu.classList.remove('animated');
    arrowToMenu.classList.add('bounceOutRight');
    arrowToMenu.classList.add('animated');
  }
})