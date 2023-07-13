# 50 Projects in 50 days - Expanding Cards solution

This is a solution to the [Expanding Cards challenge of the course](https://www.udemy.com/course/50-projects-50-days/). 50 projects in 50 days helps to Sharpen your skills by building 50 quick, unique & fun mini projects.

## Table of contents

- [50 Projects in 50 days - Expanding Cards solution](#50-projects-in-50-days---expanding-cards-solution)
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

![Destop Site Preview](screenshot.png)

### Links

- Solution URL: [solution URL](https://github.com/SoloLere/50-projects-in-50-days.git)
- Live Site URL: [live site URL](#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

With my DSA knowledge, I was able to save time in the JS code. I used the last_active to save O(N) time required by remove_active function. ☺

```js
const panels = document.querySelectorAll(".panel");

let last_active = panels[0];

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    last_active.classList.remove("active");
    panel.classList.add("active");
    last_active = panel;
  });
});
```

```js
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
```

## Author

- Mail - [Oseni Solomon](jnrolalere@gmail.com)
