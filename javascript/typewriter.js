function typewriter(element) {
  
  let letters = element.innerHTML.split('');
  element.innerHTML = ''; 
  
  letters.forEach(( letter, index ) => {
    setTimeout(() => element.innerHTML += letter, 100 * index);
  });

  
  setTimeout( function() {
    var img = document.querySelector('.ifpb-img');
    img.classList.remove('is-hidden');
    img.classList.remove('animated');
    img.classList.add('animated');
  }, 6500);
}

const text = document.querySelector('.is-typewriter');
typewriter(text);