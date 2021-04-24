const taskElement = document.getElementById('box-1');
const closingX = document.getElementById('closing-x');
const elementText = document.getElementById('item');
const checkmark = document.getElementById('checkmark');
let taskCompletionStatus = 'incomplete';

taskElement.addEventListener('click', function () {
  toggleTaskStatus();
});

function toggleTaskStatus() {
  if (taskCompletionStatus === 'incomplete') {
    markTaskComplete();
  } else if (taskCompletionStatus === 'complete') {
    markTaskIncomplete();
  }
}

function markTaskComplete() {
  changeBGColorToDarkGray();
  makeXWhite();
  alterTaskText();
  addCheckmark();
  taskCompletionStatus = 'complete';
}

function markTaskIncomplete() {
  changeBGColorToLight();
  makeXBlack();
  unstrikeTaskText();
  changeTaskTextColorToBlack();
  removeCheckmark();
  taskCompletionStatus = 'incomplete';
}

function changeBGColorToDarkGray() {
  taskElement.style.backgroundColor = 'hsla(0, 0%, 30%, 1)';
}

function changeBGColorToLight() {
  taskElement.style.backgroundColor = 'hsla(0, 0%, 80%, 1)';
}

function makeXBlack() {
  closingX.style.color = 'black';
}

function makeXWhite() {
  closingX.style.color = 'white';
}

function alterTaskText() {
  elementText.style.color = 'white';
  elementText.style.textDecoration  = 'line-through';
}

function unstrikeTaskText() {
  elementText.style.textDecoration  = 'none';
}

function changeTaskTextColorToBlack() {
  elementText.style.color = 'black';
}

function addCheckmark() {
  checkmark.style.display = 'inline';
}

function removeCheckmark() {
  checkmark.style.display = 'none';
}

closingX.addEventListener('click', function () {
  taskElement.remove();
});
