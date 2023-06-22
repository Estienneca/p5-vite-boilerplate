# p5-vite-boilerplate

The `p5-vite-boilerplate` is a ready-to-use project setup for creating interactive graphics with p5.js, leveraging the modern build tool Vite. The boilerplate comes with a pre-configured Vite development server and a base sketch. It provides a robust and efficient starting point for p5.js projects, especially for testing new ideas and creating drafts.

## Usage

To start using this boilerplate, you'll need to have Node.js and npm installed on your computer. Follow these steps:

### Installation

1. Use degit to create a new project based on this repository.
```bash
npx degit Estienneca/p5-vite-boilerplate your-project-name
```

2. Navigate into the cloned directory.
```bash
cd your-project-name
```

3. Install the dependencies.
```bash
npm install
```

### Development

Run the development server. It will automatically open the application in your default browser.
```bash
npm run dev
```
Now you can start writing your p5.js sketch in `main.js`. The Vite server has hot module replacement (HMR) enabled, so changes to your files will automatically update in the browser.

### Build

Build the project for production. This command will generate an optimized version of the project in the dist directory.
```bash
npm run build
```

### Preview

Preview the built project in your browser. This command will serve the production-ready version on a local server.
```bash
npm run preview
```

### Documentation

In the main JavaScript file (`main.js`), you'll find a basic p5.js sketch. This sketch creates a canvas with a dynamic size based on the aspect ratio of the window.

The `sketch` function contains two methods, `setup` and `draw`. The `setup` method is called once when the program starts. Here, you can define initial environment properties such as the canvas size. The `draw` method is called directly after `setup`, and it runs continuously until the program is stopped.

Below the `sketch` function is a helper function `getSizes(aspectRatio)` that returns an object with the width and height for the canvas, depending on the aspect ratio and the window size.

You can adjust the aspect ratio of the canvas by changing the `aspectRatio` constant at the top of the file.

The CSS file (`style.css`) contains basic styles for positioning the canvas in the center of the screen. You can add or modify styles as needed.

The Vite configuration file (`vite.config.js`) sets some defaults for the development server and the build process. You can modify these settings according to your needs. For more information, see the [Vite documentation](https://vitejs.dev/config/).
