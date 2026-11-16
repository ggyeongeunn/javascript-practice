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
const preAddCnt = document.querySelector('#preAdd .result');
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
const posAddCnt = document.querySelector('#posAdd .result');
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
const preSubCnt = document.querySelector('#preSub .result');
const preSubBtn = document.querySelector('#preSubBtn');
const preSubReset = document.querySelector('#preSub .reset');

preSubBtn.addEventListener('click', () => {
  let result = --preSubNum;
  preSubCnt.textContent = `num : ${preSubNum} result : ${result}`;
});
preSubReset.addEventListener('click', () => {
  preSubNum = 100;
  let result = 0;
  preSubCnt.textContent = `num : ${preSubNum} result : ${result}`;
});

// 후위 감소
let posSubNum = 100;
const posSubCnt = document.querySelector('#posSub .result');
const posSubBtn = document.querySelector('#posSubBtn');
const posSubReset = document.querySelector('#posSub .reset');

posSubBtn.addEventListener('click', () => {
  let result = posSubNum--;
  posSubCnt.textContent = `num : ${posSubNum} result : ${result}`;
});
posSubReset.addEventListener('click', () => {
  posSubNum = 100;
  let result = 0;
  posSubCnt.textContent = `num : ${posSubNum} result : ${result}`;
});

// 3. 산술 대입 연산자

// 덧셈
let comAddNum = 0;
const comAddBtn = document.querySelector('#comAddBtn');
const comAddRst = document.querySelector('#comAdd .result');
comAddRst.textContent = comAddNum;

comAddBtn.addEventListener('click', () => {
  comAddNum += 10;
  comAddRst.textContent = comAddNum;
})

// 뺄셈
let comSubNum = 100;
const comSubBtn = document.querySelector('#comSubBtn');
const comSubRst = document.querySelector('#comSub .result');
comSubRst.textContent = comSubNum;

comSubBtn.addEventListener('click', () => {
  comSubNum -= 10;
  comSubRst.textContent = comSubNum;
})

// 곱셈
let comMulNum = 2;
const comMulBtn = document.querySelector('#comMulBtn');
const comMulRst = document.querySelector('#comMul .result');
comMulRst.textContent = comMulNum;

comMulBtn.addEventListener('click', () => {
  comMulNum *= 2;
  comMulRst.textContent = comMulNum;
})

// 나눗셈
let comDivNum = 100;
const comDivBtn = document.querySelector('#comDivBtn');
const comDivRst = document.querySelector('#comDiv .result');
comDivRst.textContent = comDivNum;

comDivBtn.addEventListener('click', () => {
  comDivNum /= 10;
  comDivRst.textContent = comDivNum;
})

// 나머지
let comModNum = 10;
const comModBtn = document.querySelector('#comModBtn');
const comModRst = document.querySelector('#comMod .result');
comModRst.textContent = comModNum;

comModBtn.addEventListener('click', () => {
  comModNum %= 7;
  comModRst.textContent = comModNum;
})

// 4. 비교 연산자
// 초과 미만
const ovUdVal1 = document.querySelector('#ovUdVal1');
const ovUdVal2 = document.querySelector('#ovUdVal2');
const ovUdResult = document.querySelector('#ovUd .result');

ovUdVal1.addEventListener('input', ovUdFnc);
ovUdVal2.addEventListener('input', ovUdFnc);

function ovUdFnc() {
  const val1 = Number(ovUdVal1.value);
  const val2 = Number(ovUdVal2.value);
  
  if(ovUdVal1.value === '' || ovUdVal2.value === '') {
    return ovUdResult.textContent = '';
  }

  if(val1 > val2) {
    ovUdResult.textContent = '크다';
  } else if(val1 < val2) {
    ovUdResult.textContent = '작다';
  } else if(val1 === val2) {
    ovUdResult.textContent = '';
  } 
};

// 이상 이하
const mrLsVal1 = document.querySelector('#mrLsVal1');
const mrLsVal2 = document.querySelector('#mrLsVal2');
const mrLsResult = document.querySelector('#mrLs .result');

mrLsVal1.addEventListener('input', mrLsFnc);
mrLsVal2.addEventListener('input', mrLsFnc);

function mrLsFnc() {
  const val1 = Number(mrLsVal1.value);
  const val2 = Number(mrLsVal2.value);
  
  if(mrLsVal1.value === '' || mrLsVal2.value === '') {
    return mrLsResult.textContent = '';
  }
  
  if(val1 >= val2) {
    mrLsResult.textContent = '크거나 같다';
  } else if(val1 <= val2) {
    mrLsResult.textContent = '작거나 같다';
  } 
};

// 불완전 비교
const inComVal1 = document.querySelector('#inComVal1');
const inComVal2 = document.querySelector('#inComVal2');
const inComResult = document.querySelector('#inComparison .result');

inComVal1.addEventListener('input', inComFnc);
inComVal2.addEventListener('input', inComFnc);

function inComFnc() {
  const val1 = inComVal1.value;
  const val2 = inComVal2.value;
  
  if(inComVal1.value === '' || inComVal2.value === '') {
    return inComResult.textContent = '';
  }
  
  if(val1 == val2) {
    inComResult.textContent = '같다';
  } else if(val1 != val2) {
    inComResult.textContent = '같지 않다';
  } 
};

// 완전 비교
const comVal1 = document.querySelector('#comVal1');
const comVal2 = document.querySelector('#comVal2');
const comResult = document.querySelector('#comparison .result');

comVal1.addEventListener('input', inComFnc);
comVal2.addEventListener('input', inComFnc);

function inComFnc() {
  const val1 = comVal1.value;
  const val2 = comVal2.value;
  
  if(comVal1.value === '' || comVal2.value === '') {
    return comResult.textContent = '';
  }
  
  if(val1 === val2) {
    comResult.textContent = '완전히 같다';
  } else if(val1 !== val2) {
    comResult.textContent = '완전히 같지 않다';
  } 
};

// 5. 논리 연산자
// and
const andVal = document.querySelector('#andVal');
const andResult = document.querySelector('#and .result');

andVal.addEventListener('input', andFnc);

function andFnc() {
  const val = Number(andVal.value);
  
   if(val > 90 && val <= 100) {
    andResult.textContent = 'A';
  } else if(val > 80 && val <= 90) {
    andResult.textContent = 'B';
  } else if(val > 70 && val <= 80) {
    andResult.textContent = 'C';
  } else if(val > 60 && val <= 70) {
    andResult.textContent = 'D';
  } else {
    andResult.textContent = 'F';
  }
};
// or
const orVal = document.querySelector('#orVal');
const orResult = document.querySelector('#or .result');

orVal.addEventListener('input', orFnc);

function orFnc() {
  const val = Number(orVal.value);
  
  if(val < 19 || val > 34) {
    orResult.textContent = `${val}살은 청년이 아닙니다`;
  } else {
    orResult.textContent = `${val}살은 청년입니다`;
  }
};

// not
const notBtn = document.querySelector('#not button');
let notVal = true;
notBtn.addEventListener('click', () => {
  notVal = !notVal;
  console.log(notVal)
  if(notVal) {
    notBtn.textContent = 'True';
  } else {
    notBtn.textContent = 'False';
  }
});