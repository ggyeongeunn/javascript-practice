// 1. 산술 연산자
// 덧셈
const addVal1 = document.querySelector('#addVal1');
const addVal2 = document.querySelector('#addVal2');
const addResult = document.querySelector('#add .result');

addVal1.addEventListener('input', addCalculate);
addVal2.addEventListener('input', addCalculate);

function addCalculate() {
  const val1 = Number(addVal1.value);
  const val2 = Number(addVal2.value);

  const sum = val1 + val2;
  addResult.textContent = sum.toLocaleString();
}

// 뺄셈
const subVal1 = document.querySelector('#subVal1');
const subVal2 = document.querySelector('#subVal2');
const subResult = document.querySelector('#sub .result');

subVal1.addEventListener('input', subCalculate);
subVal2.addEventListener('input', subCalculate);

function subCalculate() {
  const val1 = Number(subVal1.value);
  const val2 = Number(subVal2.value);

  const sum = val1 - val2;
  subResult.textContent = sum.toLocaleString();
}

// 곱셈
const mulVal1 = document.querySelector('#mulVal1');
const mulVal2 = document.querySelector('#mulVal2');
const mulResult = document.querySelector('#mul .result');

mulVal1.addEventListener('input', mulCalculate);
mulVal2.addEventListener('input', mulCalculate);

function mulCalculate() {
  const val1 = Number(mulVal1.value);
  const val2 = Number(mulVal2.value);

  const sum = val1 * val2;
  mulResult.textContent = sum.toLocaleString();
}
// 나눗셈
const divVal1 = document.querySelector('#divVal1');
const divVal2 = document.querySelector('#divVal2');
const divResult = document.querySelector('#division .result');

divVal1.addEventListener('input', divCalculate);
divVal2.addEventListener('input', divCalculate);

function divCalculate() {
  const val1 = Number(divVal1.value);
  const val2 = Number(divVal2.value);

  const sum = val1 / val2;
  if (val2 !== 0) {
    divResult.textContent = sum.toLocaleString();
  } else {
    divResult.textContent = '';
  }
}

// 나머지
const modVal1 = document.querySelector('#modVal1');
const modVal2 = document.querySelector('#modVal2');
const modResult = document.querySelector('#mod .result');

modVal1.addEventListener('input', modCalculate);
modVal2.addEventListener('input', modCalculate);

function modCalculate() {
  const val1 = Number(modVal1.value);
  const val2 = Number(modVal2.value);

  const sum = val1 % val2;
  if (val2 !== 0) {
    modResult.textContent = sum.toLocaleString();
  } else {
    modResult.textContent = '';
  }
}
