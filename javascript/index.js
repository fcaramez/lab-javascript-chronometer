const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {

}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop')
  btnLeftElement.innerHTML = "STOP";
  chronometer.stop();
}

function setSplitBtn() {
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split')
  btnRightElement.innerHTML = "SPLIT";
  chronometer.split();
}

function setStartBtn() {
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start')
  btnLeftElement.innerHTML = "START";
  chronometer.start();
}

function setResetBtn() {
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset')
  btnRightElement.innerHTML = "RESET";
  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  console.log("I'm being clicked");
  
  if (btnLeftElement.innerHTML === "START") {
    chronometer.start()
    setStopBtn();
  }
  else {
    chronometer.stop()
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  console.log("I'm being clicked");
  if (btnRightElement.innerHTML === "RESET") {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});

// could not finish everything on time. Just missing the print results, will push the next changes in the weekend