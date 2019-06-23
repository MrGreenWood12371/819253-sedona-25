var popupButton = document.querySelector('.button-search');
var popup = document.querySelector('.hotel-popup');
popup.classList.add('shide');
popupButton.addEventListener('click', function(evt){
  evt.preventDefault();
  if(popup.classList.contains('shide')){
    popup.classList.remove('shide');
    popup.classList.add('modal-show');
  }
  else{
    popup.classList.add('shide');
  }
});

