# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Contact Form Screenshot](/public/screenshot.png)

### Links

- Solution URL: [URL](https://www.frontendmentor.io/solutions/contact-form-using-react-and-react-hook-form-y5ASBgNlfK)
- Live Site URL: [URL](https://contact-form-red-eta.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React-Hook-Forms](https://react-hook-form.com/) - React library
- [React-Toastify](https://www.npmjs.com/package/react-toastify) - React library

### What I learned

Learnt more about React components, how to perform form validation using React Hook form, and how to customise React Toastify.

To see how you can add code snippets, see below:


```css
.Toastify__toast-theme--colored.Toastify__toast--success {
  @apply bg-neutral-darker-grey text-neutral-white rounded-xl w-fit p-5;
}

.Toastify__toast-body {
  @apply block;
}

.Toastify__toast-container--top-center {
  @apply w-fit;
}

.Toastify__toast-icon {
  @apply hidden;
}
```

```js
// Use React Hook Form
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm();

// Display a Toast message after successful form submission
const onSubmit = () => {
  toast.success(
    <div className="w-fit font-body space-y-2">
      <div className="flex place-items-center">
        <img src={image} className="inline" />
        <p className="inline font-bold ps-3 text-lg">Message Sent!</p>
      </div>
      <p className="text-wrap md:text-nowrap">
        Thanks for completing the form. We&apos;ll be in touch soon!
      </p>
    </div>,
    {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      closeButton: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    }
  );

  reset();
};
```

### Continued development

Going to continue building my React knowledge.

### Useful resources

- [React-toastify - How to style](https://fkhadra.github.io/react-toastify/how-to-style) - This helped me in the styling of react toasts.

## Author

- Frontend Mentor - [@Fejiro001](https://www.frontendmentor.io/profile/Fejiro001)
- Twitter - [@aberefejiro](https://www.twitter.com/aberefejiro)
