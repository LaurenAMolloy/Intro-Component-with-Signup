# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
 
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/Screenshot%202024-12-28%20at%2015.55.44.pngscreenshot.jpg)

### Links

- Live Site URL: [live site](https://laurenamolloy.github.io/Intro-Component-with-Signup/)

## My process

I started by looking at an existing form project and how the HTML was organised. Then I created the HTML based on the example. I then asked Chat GPT for some assistance with the styles. It gave me a loose base to work from than I adjusted the styles accordingly ensuring the fonts were correct, adding the root colors, changed the background images and changed the layout to be responsive using flexbox.

Then I started on the JavaScript. I did not want to look at an example or follow an existing solution foir this part so I used MDN Docs to help me out. I did a couple of their tasks to practice form validity and then got to work on three main sections of the code; grabbing the elemenets, writing functions and adding evenetlisteners to the inputs and submit button.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Whilst building the challenge I learnt the following:
- How to create an object of inputs in order to select based on id or errorID.
- How to use the for each loop the access each input and validate accordingly.
- How to create a special case vaidation for the email input using regex.
- How to use focus and blur to create a user friendly experience and clear/restore placeholder text.

### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation#livesample_fullscreen=extending_built-in_form_validation) - This helped me with understanding the built in validation that HTML5 has, when to use it and when to use JavaScript for a more custom approach.

## Author

- Frontend Mentor - [@LaurenAMolloy](https://www.frontendmentor.io/profile/LaurenAMolloy)


## Acknowledgments
Thanks to Frontend Queens who have created an awesome community for women in tech and my fabulous tutor, Sarah Soutoul, who has endless patience and passion for teaching coding.


