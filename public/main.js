let currentScrollPosition = 0;
let scrollAmount = 330;

const sCont = document.querySelector(".storys-container");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.getElementById("btn-scroll-left");
const btnScrollLeftBox = document.querySelector(".gradiant-color-fix-left");
const btnScrollRight = document.getElementById("btn-scroll-right");
const btnScrollRightBox = document.querySelector(".gradiant-color-fix-right");
btnScrollLeft.style.opacity = "0";
btnScrollLeftBox.style.opacity = 0;
let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

btnScrollLeft.addEventListener("click", e => {
  slider(1);
});

btnScrollRight.addEventListener("click", e => {
  slider(-1);
});

function slider(val) {

  currentScrollPosition += (val * scrollAmount);

  if(currentScrollPosition > 0) {
    currentScrollPosition = 0;
    btnScrollLeft.style.opacity = 0;
    btnScrollLeftBox.style.opacity = 0;
  } else {
    btnScrollLeft.style.opacity = 1;
    btnScrollLeftBox.style.opacity = 1;
  }
    

  if(currentScrollPosition < maxScroll) {
    currentScrollPosition = maxScroll;
    btnScrollRight.style.opacity = 0;
    btnScrollRightBox.style.opacity = 0;
  } else {
    btnScrollRight.style.opacity = 1;
    btnScrollRightBox.style.opacity = 1;
  }
    

  sCont.style.left = currentScrollPosition + "px";
}
