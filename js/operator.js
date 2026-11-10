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
};

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
};

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
};

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
};

// 2. 증감 연산자
// 전위 증가
let preAddNum = 0;
const preAddCnt = document.querySelector('#preAdd span');
const preAddBtn = document.querySelector('#preAddBtn');
const preAddReset = document.querySelector('#preAdd .reset');

preAddBtn.addEventListener('click', () => {
  let result = ++preAddNum;
  preAddCnt.textContent = `num : ${preAddNum} result : ${result}`;
});
preAddReset.addEventListener('click', () => {
  preAddNum = 0;
  let result = preAddNum;
  preAddCnt.textContent = `num : ${preAddNum} result : ${result}`;
});

// 후위 증가
let posAddNum = 0;
const posAddCnt = document.querySelector('#posAdd span');
const posAddBtn = document.querySelector('#posAddBtn');
const posAddReset = document.querySelector('#posAdd .reset');

posAddBtn.addEventListener('click', () => {
  let result = posAddNum++;
  posAddCnt.textContent = `num : ${posAddNum} result : ${result}`;
});
posAddReset.addEventListener('click', () => {
  posAddNum = 0;
  let result = posAddNum;
  posAddCnt.textContent = `num : ${posAddNum} result : ${result}`;
});

// 전위 감소
let preSubNum = 100;
const preSubCnt = document.querySelector('#preSub span');
const preSubBtn = document.querySelector('#preSubBtn');
const preSubReset = document.querySelector('#preSub .reset');

preSubBtn.addEventListener('click', () => {
  let result = --preSubNum;
  preSubCnt.textContent = `num : ${preSubNum} result : ${result}`;
});
preSubReset.addEventListener('click', () => {
  preSubNum = 0;
  let result = preSubNum;
  preSubCnt.textContent = `num : ${preSubNum} result : ${result}`;
});

// 후위 감소
let posSubNum = 100;
const posSubCnt = document.querySelector('#posSub span');
const posSubBtn = document.querySelector('#posSubBtn');
const posSubReset = document.querySelector('#posSub .reset');

posSubBtn.addEventListener('click', () => {
  let result = posSubNum--;
  posSubCnt.textContent = `num : ${posSubNum} result : ${result}`;
});
posSubReset.addEventListener('click', () => {
  posSubNum = 0;
  let result = posSubNum;
  posSubCnt.textContent = `num : ${posSubNum} result : ${result}`;
});

// 3. 대입 연산자