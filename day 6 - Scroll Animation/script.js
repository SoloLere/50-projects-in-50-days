const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", moveBoxes);

const triggerPoint = (window.innerHeight / 5 ) * 4
moveBoxes()

function moveBoxes() {
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop <= triggerPoint){
      box.classList.add("show")
    }
    else {
      box.classList.remove("show")
    }
  });
}