# Numix UI

[![License](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Numix UI is a CSS library that brings the distinctive look and feel of the popular Numix desktop theme to your web projects. With Numix UI, you can easily style your web applications with a modern, clean, and consistent aesthetic inspired by the beloved Linux desktop environment.

## Features
****
* **Familiar Numix Styling:** Provides CSS classes for common UI elements, replicating the visual style of the Numix desktop theme.
* **Clean and Modern Design:** Offers a polished and contemporary look for your web interfaces.
* **Easy Integration:** Simple to include in any HTML project with minimal setup.
* **Customizable:** Built with flexibility in mind, allowing for easy adjustments and extensions.
* **Consistent Look and Feel:** Ensures a unified visual experience across your web application.
* **Responsive Design:** Adapts to various screen sizes and devices, ensuring a seamless experience for users.
* **Cross-Browser Compatibility:** Works well across modern web browsers, ensuring a consistent experience for all users.
* **Lightweight:** Minimal CSS footprint, ensuring fast load times and performance.
* **Open Source:** Free to use and modify under the GPL-3.0 license.

## Screenshots
![Numix UI Screenshot](https://github.com/numix-ui/design-assets/blob/main/screenshots/Numix-UI-Screenshot-v0.1.png)

## Installation

You can include Numix UI in your project in a few ways:

### Download and Host Locally

Download the latest release of Numix UI from [LoboGuardian/numix-ui](https://github.com/LoboGuardian/numix-ui).
Copy the numix-ui.min.css file (or the unminified numix-ui.css if you prefer) into your project's CSS directory.
Link to the CSS file in the <head> of your HTML document:

```HTML

<link rel="stylesheet" href="css/numix-ui.min.css">
```

### Via CDN  (comming soon)

The easiest way to get started is by using a Content Delivery Network (CDN). Simply add the following `<link>` tag to the `<head>` of your HTML document:

```html
<link rel="stylesheet" href="[https://cdn.example.com/numix-ui/latest/numix-ui.min.css](https://cdn.example.com/numix-ui/latest/numix-ui.min.css)">
```

> Note: Replace https://cdn.example.com/numix-ui/latest/numix-ui.min.css with the actual CDN URL for the latest version of Numix UI.


### Via npm (comming soon)

```Bash
npm install numix-ui
```

Then, you can import it into your CSS or JavaScript files depending on your build process.

```CSS

/* In your main CSS file */
@import 'numix-ui';
```

## Build & Minify

Numix UI supports an automated build process to generate minified assets for production.

### Step 1: Set up the project

```bash
npm init -y
npm install --save-dev csso-cli uglify-js
```

### Step 2: Add build scripts to package.json (already added)

```json
"scripts": {
  "minify:css": "csso css/numix-ui.css -o css/numix-ui.min.css",
  "minify:js": "uglifyjs js/numix-ui.js -o js/numix-ui.min.js --compress --mangle",
  "minify": "npm run minify:css && npm run minify:js",
  "build": "npm run minify"
}
```

### Step 3: Run the build

```bash
npm run build
```

This will:

- Compress css/numix-ui.css → css/numix-ui.min.css

- Compress js/numix-ui.js → js/numix-ui.min.js

## Usage

To apply Numix UI styles, simply add the provided CSS classes to your HTML elements. Here are a few examples:

- Buttons

```HTML

<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-default">Default Button</button>
```

- Forms

```HTML

<div class="form-group">
  <label for="exampleInputEmail1">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
</div>
<div class="checkbox">
  <label>
    <input type="checkbox"> Remember me
  </label>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
```

- Navigation

```HTML

<ul class="nav nav-primary">
  <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
  <li class="nav-item"><a class="nav-link" href="#">About</a></li>
</ul>
```

> Note: Refer to the [documentation](not-available) for a comprehensive list of available classes and their usage.

## Contributing

Contributions are welcome! If you'd like to contribute to Numix UI, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and 1 ensure they adhere to the project's coding standards.   
- Write clear and concise commit messages.
- Submit a pull request with a detailed description of your changes.

## License

Numix UI is open-source software licensed under the [GPL-3.0](LICENSE).

## Acknowledgements

We would like to acknowledge the creators and contributors of the original Numix desktop theme for their inspiring work.

## Stay Connected

Follow us on GitHub for updates and new releases:

- [Numix UI ](https://github.com/numix-ui/numix-ui)
- [Based Work LoboGuardian/Numix UI ](https://github.com/LoboGuardian/numix-ui)

Thank you for using Numix UI! We hope you enjoy bringing the Numix experience to the web.
