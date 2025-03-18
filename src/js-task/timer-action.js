
function timerAction(value) {
  let startTimer = 1;
  let timer = setInterval(() => console.log(startTimer++), 1000);
  setTimeout(() => { clearInterval(timer); console.log('Акция завершена!'); }, value);
}