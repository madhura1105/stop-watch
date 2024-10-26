const timer = document.querySelector('.time');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

let startTime;
let elapsedTime;
let timerInterval;

startBtn.addEventListener('click', () => {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timer.textContent = formatTime(elapsedTime);
  }, 10);

  startBtn.style.display = 'none';
  stopBtn.style.display = 'inline-block';
  resetBtn.style.display = 'inline-block';
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerInterval);

  startBtn.style.display = 'inline-block';
  stopBtn.style.display = 'none';
  resetBtn.style.display = 'inline-block';
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);

  timer.textContent = '00:00:00';
  startTime = null;
  elapsedTime = 0;

  startBtn.style.display = 'inline-block';
  stopBtn.style.display = 'none';
  resetBtn.style.display = 'none';
});

function formatTime(time) {
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const hours = Math.floor(time / 1000 / 60 / 60);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
