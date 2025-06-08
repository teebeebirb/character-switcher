const input = document.getElementById('textInput');
const submitBtn = document.getElementById('submitBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const delayInput = document.getElementById('delayInput');
const display = document.getElementById('displayText');

const fontClasses = ['font-jersey-10', 'font-tiny5', 'font-dotgothic16', 'font-barcode', 'font-yarndings'];

let animationIntervals = []; // store interval IDs so we can pause/stop later

input.addEventListener('input', function() {
  const text = input.value;
  let html = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i] === ' ' ? '&nbsp;' : text[i];
    html += '<span class="char">' + char + '</span>';
  }

  display.innerHTML = html;
});

submitBtn.addEventListener('click', function() {
  // Clear any previous animations first
  for (let i = 0; i < animationIntervals.length; i++) {
    clearInterval(animationIntervals[i]);
  }
  animationIntervals = [];

  const charSpans = display.querySelectorAll('.char');
  const baseDelay = parseInt(delayInput.value, 10) || 100;

  for (let i = 0; i < charSpans.length; i++) {
    (function(index) {
      const charSpan = charSpans[index];

      const interval = setInterval(function() {
        for (let j = 0; j < fontClasses.length; j++) {
          charSpan.classList.remove(fontClasses[j]);
        }

        const randomIndex = Math.floor(Math.random() * fontClasses.length);
        charSpan.classList.add(fontClasses[randomIndex]);
      }, baseDelay + Math.random() * 300);

      animationIntervals.push(interval);
    })(i);
  }
});

pauseBtn.addEventListener('click', function() {
  for (let i = 0; i < animationIntervals.length; i++) {
    clearInterval(animationIntervals[i]);
  }
  animationIntervals = [];
});

stopBtn.addEventListener('click', function() {
  for (let i = 0; i < animationIntervals.length; i++) {
    clearInterval(animationIntervals[i]);
  }
  animationIntervals = [];

  // Reset all spans to default font
  const charSpans = display.querySelectorAll('.char');
  for (let i = 0; i < charSpans.length; i++) {
    for (let j = 0; j < fontClasses.length; j++) {
      charSpans[i].classList.remove(fontClasses[j]);
    }
    charSpans[i].classList.add('font-jersey-10'); 
  }
});
