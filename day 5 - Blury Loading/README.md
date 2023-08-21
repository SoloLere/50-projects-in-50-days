# 50 Projects in 50 days - Blury Loading solution

This is a solution to the [Blury Loading project of the course](https://www.udemy.com/course/50-projects-50-days/). 50 projects in 50 days helps to Sharpen your skills by building 50 quick, unique & fun mini projects.

## Table of contents

- [50 Projects in 50 days - Blury Loading solution](#50-projects-in-50-days---blury-loading-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- See the image load from an initially blurry state.

### Screenshot

![Destop Site Preview](img/screenshot1.png)
![Destop Site Preview](img/screenshot2.png)

### Links

- Solution URL: [solution URL](https://github.com/SoloLere/50-projects-in-50-days.git)

## My process

### Built with

- Semantic HTML5 markup
- CSS 
- JavaScript

### What I learned

- SetTimeout and SetTimeinterval are functions that schedule when to call another function.
- setTimeout allows us to run a function once after the interval of time.
- setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
- clearTimeout and clearInterval stops the setTimeout and setTimeinterval functions from executing



```js
setTimeout(fn, delay)
setInterval(fn, duration)
clearTimeout(fn)
clearInterval(fn)
```

- **Pass a function, but don’t run it**
- Novice developers sometimes make a mistake by adding brackets () after the function:

```js
// wrong!
setTimeout(sayHi(), 1000);
```
- That doesn’t work, because setTimeout expects a reference to a function. And here sayHi() runs the function, and the result of its execution is passed to setTimeout. In this case the result of sayHi() is undefined (the function returns nothing), so nothing is scheduled.


### Useful resources

- [Resource 1](https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers) - This helped me create a function that maps a range of input to another range of output

## Author

- Mail - [Oseni Solomon](jnrolalere@gmail.com)

