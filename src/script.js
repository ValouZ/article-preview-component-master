const buttonShare = document.querySelector("#app-button-share");
const share = document.querySelector(".share");
const bottomCard = document.querySelector(".bottom-card");

buttonShare.addEventListener('click', displayShare);

function displayShare(){
  share.classList.toggle("clicked");
  buttonShare.classList.toggle("clicked");
  bottomCard.classList.toggle("clicked");
}
