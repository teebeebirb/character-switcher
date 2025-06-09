# Character Switcher - Text Animation with HTML, CSS and JavaScript

This script creates a glitchy text animation effect by randomly swapping fonts on each character of a user-input string. I was thinking something like this could be applied in loading screens or transition moments where you want something kinetic and eye-catching. You can swap the fonts used if you want to go with a different aesthetic than the pixel style demonstrated in this project.

Play with a live demo: [teebeebirb.github.io/character-switcher](https://teebeebirb.github.io/character-switcher/)

![Screenshot of Character Switcher](https://raw.githubusercontent.com/teebeebirb/character-switcher/refs/heads/main/character-switcher-demo.png)

## How It Works

Once a user types text into the input field, each character is split into a separate `<span>`. When the **Animate** button is clicked, each character starts cycling through different font classes in a loop. The timing of these changes is randomized a bit so the animation feels a little more organic. You can pause the animation or stop it entirely, which resets the characters back to a default font.

I've added comments throughout the JavaScript code to help explain what's going on with each function.

The font options come from a predefined list of CSS classes, so the styling can be customized easily just by updating your CSS.

## Controls

- **Text Input**: Type your message here. You'll see a live preview as you type.
- **Animate**: Starts the font-switching animation.
- **Pause**: Halts the animation in place without resetting the preview.
- **Stop**: Stops the animation and resets all characters to the default font.
- **Animation Delay (ms)**: Controls how fast the fonts switch. Lower numbers mean faster animation.

## Setup

1. Make sure your HTML file has elements with these IDs:
   - `textInput`, `submitBtn`, `pauseBtn`, `stopBtn`, `delayInput`, and `displayText`
2. Link a stylesheet that defines the font classes used in `fontClasses` (like `'font-jersey-10'`, `'font-dotgothic16'`, etc).
3. Include this script at the bottom of your HTML or make sure the DOM has loaded before it runs.

```html
<script src="character-switcher-animation.js"></script>
```

### Credits

- I was inspired to try animating text by looping through characters thanks to seeing people use [CLI spinners](https://github.com/sindresorhus/cli-spinners) by [@sindresorhus](https://github.com/sindresorhus) in their web animations.
- The pixel border styling was possible thanks to [Pixelated rounded corners](https://pixelcorners.lukeb.co.uk/?radius=8&multiplier=4) generator by [@CodeFoodPixels](https://github.com/CodeFoodPixels).
- I troubleshooted my code with ChatGPT-4o, and I referenced Codecademy's documentation, Mozilla's JS documentation and Jon Duckett's "JAVASCRIPT AND JQUERY".
