// 1. 산술 연산자
// 덧셈
const plusVal1 = document.querySelector('#plusVal1');
const plusVal2 = document.querySelector('#plusVal2');
const answer = document.querySelector('.answer');

const plusResult = document.createElement('p');
plusResult.classList.add('result');
answer.appendChild(plusResult);

plusVal1.addEventListener('input', (e) => {
  plusResult.textContent = `${e.target.value}`;

  
})