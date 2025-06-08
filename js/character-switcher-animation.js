// These variables access the interactive elements in "index.html"
const input = document.getElementById('textInput');
const submitBtn = document.getElementById('submitBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const delayInput = document.getElementById('delayInput');
const display = document.getElementById('displayText');

// This array comes from the class declarations in "styles.css" for the imported fonts
const fontClasses = ['font-jersey-10', 'font-tiny5', 'font-dotgothic16', 'font-barcode', 'font-yarndings']; 

// Store interval IDs so the animation can be paused/stopped later
let animationIntervals = []; 

/* This function allows the user to see a live preview of the text they type in before
the animation is triggered. The for loop takes the string and splits it into individual
character <span> elements within the <p> element that appears in the preview window. */
input.addEventListener('input', function() {
  const text = input.value;
  let html = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i] === ' ' ? '&nbsp;' : text[i];
    html += '<span class="char">' + char + '</span>';
  }

  display.innerHTML = html;
});

/* This function is triggered by the "Animate" button. It looks at the line of <span> elements
being rendered on the screen by the previous function and randomly changes the font of the 
characters in the individual <span> elements. This is where the magic happens. */
submitBtn.addEventListener('click', function() {
  // Clear any previous animations first
  for (let i = 0; i < animationIntervals.length; i++) {
    clearInterval(animationIntervals[i]);
  }
  animationIntervals = [];

  // This returns a NodeList from the <span> elements than can be looped through like an array
  const charSpans = display.querySelectorAll('.char');

  // This makes it so whatever numbers are typed in the "Animated Delay (ms):" field are converted into integers
  const baseDelay = parseInt(delayInput.value, 10) || 100;

  /* This loop looks at each index in the NodeList (each individual character in line of <span> elements), removes 
  its current font, then randomly loops through the array of font classes declared above, and assigns a new
  font class to that character based on where the font class loop ends up. This loop fires off in intervals that
  are affected by the number of milliseconds entered in the "Animated Delay (ms):" field. */
  for (let i = 0; i < charSpans.length; i++) {
    (function(index) {
      const charSpan = charSpans[index];

      // Remove the current font of the current character in the loop
      const interval = setInterval(function() {
        for (let j = 0; j < fontClasses.length; j++) {
          charSpan.classList.remove(fontClasses[j]);
        }

        /* Randomly assign a new font to the current character in the loop.
        There's a chance the new font will be the same as before, preserving
        the appearance of that character for a time. */
        const randomIndex = Math.floor(Math.random() * fontClasses.length);
        charSpan.classList.add(fontClasses[randomIndex]);
      }, baseDelay + Math.random() * 300);

      animationIntervals.push(interval);
    })(i);
  }
});

// This function stops the loop that controls the animation but doesn't reset what is being rendered in the preview window
pauseBtn.addEventListener('click', function() {
  for (let i = 0; i < animationIntervals.length; i++) {
    clearInterval(animationIntervals[i]);
  }
  animationIntervals = [];
});

// This function stops the loop that controls the animation and resets what is being rendered in the preview window
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
