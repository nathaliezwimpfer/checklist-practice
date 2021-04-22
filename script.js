const taskElement = document.getElementById('box-1');
const closingX = document.getElementById('closing-x');
const elementText = document.getElementById('item');
const checkmark = document.getElementById('checkmark');

taskElement.addEventListener('click', function () {
  changeBackgroundColor();
  makeXWhite();
  makeTextWhite();
  addCheckmark();
});

function changeBackgroundColor() {
  taskElement.style.backgroundColor = 'hsla(0, 0%, 30%, 1)';
}

function makeXWhite() {
  closingX.style.color = 'white';
}

function makeTextWhite() {
  elementText.style.color = 'white';
  elementText.style.textDecoration  = 'line-through';
}

function addCheckmark() {
  checkmark.style.display = 'inline';
}
