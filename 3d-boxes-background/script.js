'use strict';

const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');
const inputMagic = document.getElementById('input-magic');
const inputWithBox = document.getElementById('input-widthbox');
let scope = 5;
let widthBox = 500;
btn.addEventListener('click', onClickButton)
inputMagic.addEventListener("change", onChangeInput);
inputWithBox.addEventListener("change", onChangeInputWidth);

function onClickButton() {
  boxesContainer.classList.toggle('big');
  const boxBig =  widthBox +  (widthBox / scope)-1;
  console.log(boxBig);
  // createBoxes(scope);
  if (boxesContainer.classList.contains('big')) {
    boxesContainer.style.width = boxBig + 'px';
    boxesContainer.style.height = boxBig + 'px';
  } else {
    boxesContainer.style.width = widthBox + 'px';
    boxesContainer.style.height = widthBox + 'px';
  }
}

function onChangeInput(e) {
  scope = parseInt(e.target.value);
  createBoxes(scope);
}

function onChangeInputWidth(e) {
  widthBox = parseInt(e.target.value);

  createBoxes(scope); 
}

function createBoxes(scope = 5) {
  boxesContainer.innerHTML = '';
  const boxBig =  widthBox +  (widthBox / scope)-1;
  console.log(boxesContainer.classList.contains('big'));
  if (boxesContainer.classList.contains('big')) {
    boxesContainer.style.width = boxBig + 'px';
    boxesContainer.style.height = boxBig + 'px';
  } else {
    boxesContainer.style.width = widthBox + 'px';
    boxesContainer.style.height = widthBox + 'px';
  }

  for (let i = 0; i < scope; i++) {
    for (let j = 0; j < scope; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.width = (widthBox / scope) + 'px';
      box.style.height = (widthBox / scope) + 'px';
      box.style.backgroundSize = widthBox + 'px' +' ' + widthBox + 'px';
      box.style.backgroundPosition = `${-j * (widthBox / scope)}px ${-i * (widthBox / scope)}px`
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes();

