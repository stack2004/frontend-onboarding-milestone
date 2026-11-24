// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const runtimeClock = document.getElementById('runtimeClock');
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// 1. Live Clock
function updateClock() {
  const now = new Date();
  runtimeClock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// 2. Interactive Counter
let count = 0;
incrementBtn.addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});

decrementBtn.addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counterValue.textContent = count;
});

// 3. Theme Toggle with LocalStorage
const savedTheme = localStorage.getItem('app-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('app-theme', nextTheme);
  themeToggle.textContent = nextTheme === 'dark' ? '🌙' : '☀️';
});
