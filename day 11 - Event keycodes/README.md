# 50 Projects in 50 days - Event keycodes solution

This is a solution to the [Event keycodes project of the course](https://www.udemy.com/course/50-projects-50-days/). 50 projects in 50 days helps to Sharpen your skills by building 50 quick, unique & fun mini projects.

## Table of contents

- [50 Projects in 50 days - Event keycodes solution](#50-projects-in-50-days---event-keycodes-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Destop Site Preview](img/screenshot.png)

### Links

- Solution URL: [solution URL](https://github.com/SoloLere/50-projects-in-50-days.git)
- Live Site URL: [live site URL](#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript

### What I learned

keydown event is triggered whenever any key is pressed on my keyboard, to figure out the specific key pressed and a whole bunch of other properties of the key, I do the following:

```js
window.addEventListener("keydown", (e) => {
  console.log(e);
});
```

## Author

- Mail - [Oseni Solomon](jnrolalere@gmail.com)
