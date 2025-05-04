const display = document.getElementById('display');
const themeIcon = document.getElementById('themeIcon');
const tooltip = document.getElementById('themeTooltip');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function toggleSign() {
  if (display.value) {
    if (display.value.startsWith('-')) {
      display.value = display.value.substring(1);
    } else {
      display.value = '-' + display.value;
    }
  }
}

function calculate() {
  try {
    display.value = eval(display.value.replace('%', '/100'));
  } catch {
    display.value = 'Error';
  }
}

function toggleTheme() {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');

  const isLight = document.body.classList.contains('light');
  themeIcon.textContent = isLight ? '🌙' : '🔆';  // updated icons
  tooltip.textContent = isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode';
}

document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || "+-*/.()".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    backspace();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
