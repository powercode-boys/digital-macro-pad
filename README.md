# Digital Macro Pad

A simple tool for creating and using digital macros.

![Screenshot of the program](digital-macro-pad-screenshot.png)



## Features

* Creating, editing and deleting macros with a **name**, a **description** and a **command** to help you speed up your development process.
* Allows you to store often used macros, and to **execute** or **copy** them whenever you need.
* Macros will be automatically stored on your machine, so they are persistent even if you restart your PC.
* A **search bar** that filters the macros according to the keyword you typed in.
* A **theme picker**, so you can customize the UI how you like.
* **Import/Export** macros, in order to share your macros with others.
* A `terminalOutput.txt` file in the AppData directory to check the latest terminal output if you need.



## Installation guide

### Install via Release (Windows only)

1. Download the newest release from the GitHub [Releases](https://github.com/powercode-boys/digital-macro-pad/releases) tab.
2. Extract the contents of the zip archive.
3. Run the `digital-macro-pad-<Version> Setup.exe` setup.
4. Now the application is available under `%LocalAppData%/digital_macro_pad/app-<Version>/digital-macro-pad.exe`. 
5. **Optional:** you can create a Desktop shortcut in order to access the Macro Pad from your Desktop.



### Install via Source (compile by yourself)

**This requires you to have NodeJS and NPM installed.**

1. Clone the repository via git (`git clone https://github.com/powercode-boys/digital-macro-pad.git`).
2. Navigate into the project folder (`cd digital-macro-pad`).
3. Install all NPM packages of this project (`npm install`).
4. Compile the project for your local operating system (`npm run build`)
5. Navigate into the `out/make/` folder. You will find the setup file there.



## Instructions on using the macro pad

* Click on the '+' icon to add a new macro.
  * You can assign a name*, a description and a command* to the macro (\*required values).
* After a macro has been created:
  * Click on the run icon to execute the command of the macro.
  * Click on the clipboard icon to copy the command of the macro.
* Edit or delete a macro by accessing the dropdown menu of the macro.
* Type into the search bar to filter the view of your macros.
* Click on the settings icon to change the theme and to import/export macros.



## Technologies that we are using

This project was created by combining [Svelte](https://svelte.dev/) and [Electron](https://www.electronjs.org/) into a desktop application with reactive UI and file system integration.

For styling and layout of the project we are using [daisyUI](https://daisyui.com/), on top of [TailwindCSS](https://tailwindcss.com/).