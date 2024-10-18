# File structure

The file structure built for this project starts from the root directory:

<figure><img src="../.gitbook/assets/image (6).png" alt=""><figcaption><p>Root directory</p></figcaption></figure>

The files and folders included are the following:

* dist (excluded by .gitignore): It's the result of executing the _npm build_ command which compiles the project into a single index.html file.
* documentation: This folder contains all documentation files such as this guide.
* node\_modules (excluded by .gitignore): It's the result of executing the _npm install_ command which downloads every dependency we need to develop the application.
* public: Assets (images, icons, fonts, etc.) and the compiled \<script> tag will be stored in this folder. We can include HTML head level resources here.
* src: This folder stores all our implementations for our application.
* .gitignore: This file tells Git which files from the repository should not be tracked.
* eslint.config.js: File used to configure ESLint behaviour and plugins.
* index.html: Main HTML where our app is set on.
* package-lock.json and package.json: JSON files that stores our application dependencies that might be downloaded when executing _npm i_ command.
* README.md (Replaced by this document): File that specifies how to set our project up.&#x20;
* vite.config.js: Since our react app is being compiled and packed with Vite, we can configure the behaviour of this tool in this file.

