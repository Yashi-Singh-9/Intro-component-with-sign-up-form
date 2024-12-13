# Frontend Mentor - Intro Component with Sign up Form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Sass Installation and Usage](#sass-installation-and-usage)
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

**Desktop Design**

![](design/desktop-design.png)

**Mobile Design**

<img src="design/mobile-design.png"  height="900" alt="Mobile Design">

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/intro-component-with-sign-up-form-FPF9U-dqaB)
- Live Site URL: [Live Site](https://yashi-singh-9.github.io/Intro-component-with-sign-up-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Sass (SCSS syntax) for styling

### What I learned

In this project, I learned how to handle form validation and display error messages dynamically with JavaScript. I also enhanced my understanding of CSS Flexbox to create responsive layouts and Sass for more efficient and modular styling.

Here is a code sample that highlights form validation in JavaScript:

```js
function validateForm() {
  let isValid = true;

  // Validate first name
  if (firstNameInput.value.trim() === '') {
    showError(firstNameInput, firstNameError, 'First Name cannot be empty', firstNameIcon);
    isValid = false;
  } else {
    clearError(firstNameInput, firstNameError, firstNameIcon);
  }
  
  // Other validation code...
}
```

This function checks whether the form fields are filled and whether the email is in a correct format.

### Continued development

I will continue improving my understanding of form validation, adding more complex checks such as confirming passwords and enhancing user feedback on submission. Additionally, I plan to improve my skills with Sass, especially in creating reusable mixins and functions.

### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io/) - Great platform for practicing frontend skills with realistic projects.
- [Sass Documentation](https://sass-lang.com/documentation) - The official documentation was a huge help in understanding the power of Sass.

### Sass Installation and Usage

In this project, I used Sass (SCSS syntax) to manage the styles. Here's how you can install and run Sass for this project:

#### Installation:

1. **Install Node.js**:
   Ensure that [Node.js](https://nodejs.org/) is installed on your system. You can verify this by running:

   ```bash
   node -v
   npm -v
   ```

2. **Install Sass**:
   You can install Sass globally using npm:

   ```bash
   npm install -g sass
   ```

   Alternatively, you can install Sass locally in your project directory:

   ```bash
   npm install --save-dev sass
   ```

#### Running Sass:

1. **Compiling Sass**:
   After installing Sass, you can compile your SCSS files to CSS by running:

   ```bash
   sass style.sass style.css
   ```

   This will take the `style.scss` file and generate a `style.css` file.

2. **Watch Mode**:
   You can also use Sass's watch feature, which automatically re-compiles your SCSS files whenever you make changes:

   ```bash
   sass --watch style.sass:style.css
   ```

#### Folder Structure:

- `style.sass` (Sass file where the styling is written using SASS syntax)
- `style.css` (Generated CSS file that is linked in the HTML)

### Author

- Frontend Mentor - [@Yashi-Singh-9](https://www.frontendmentor.io/profile/Yashi-Singh-9)
- LinkedIn - [Yashi Singh](https://www.linkedin.com/in/yashi-singh-b4143a246)

## Acknowledgments

Thank you to Frontend Mentor for providing this challenging project. I'd also like to thank the community for sharing their solutions and insights, which helped me tackle some tricky parts during the project.
