function changeContent(number) {
  var elementList = document.getElementById('event-content');
  var contentList = elementList.querySelectorAll('div');
  contentList.forEach(element => {
    element.classList.add('is-hidden');
  });
  contentList[number].classList.remove('is-hidden');
}

function activeDate(number) {
  var elementList = document.getElementById('agenda-date');
  var dateList = elementList.querySelectorAll('li')
  dateList.forEach(element => {
    var linkElement = element.querySelector('a');
    linkElement.classList.remove('is-agenda-active')
  });
  dateList[number].querySelector('a').classList.add('is-agenda-active')

  changeContent(number);
}