# Digital Macro Pad
A simple tool for creating and using digital macros.

<img src="digital-macro-pad-screenshot.png">

## Features
- Creating, editing and deleting macros and assigning a **name**, a **description** and a **command**
- Copying the command to the clipboard

## Installation guide
1. Clone the repository, or download and the zip and extract
2. Navigate to the folder
3. Run `digital-macro-pad.exe`

## Instructions on using the app
- Click the <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/circle-plus.svg" id="addButton"> icon in the bottom right corner
- Assign name, description and command and confirm
- After a macro has been created, click the <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/regular/clipboard.svg" width="25" height="18"> icon to copy the command to your clipboard
- Edit or delete a macro, by clicking the <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/ellipsis-vertical.svg" width="20" height="16"> icon

## Technologies that were used
This project was created by combining [Svelte](https://svelte.dev/) and [Electron](https://www.electronjs.org/). <br> For styling, we used [daisyUI](https://daisyui.com/) and [Tailwind CSS](https://tailwindcss.com/).

<style>
    #addButton {
    width: 27px;
    height: 18px;
    filter: invert(42%) sepia(93%) saturate(242%) hue-rotate(87deg) brightness(169%) contrast(99%);
}

</style>