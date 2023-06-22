
# p5-vite-boilerplate

The `p5-vite-boilerplate` is a ready-to-use project setup for creating interactive graphics with p5.js, leveraging the modern build tool Vite. The boilerplate comes with a pre-configured Vite development server and a base sketch. It provides a robust and efficient starting point for p5.js projects, especially for testing new ideas and creating drafts.

---


## Getting Started 🚥

- ### Installation 

Clone the repository into a new project directory.
```bash
git clone https://github.com/Estienneca/p5-vite-boilerplate your-project-name
```

Navigate into the cloned directory.
```bash
cd your-project-name
```

Install the dependencies.
```bash
npm install
```
Start the web server to run the default p5.js sketch
```bash
npm run dev
```
It will automatically open the application in your default browser.


- ### Start coding

The `main.js` file contains a default `sketch` function you can start to edit.
```javascript
import './style.css'
import p5 from "p5"

// set the aspect ratio of the canvas
const aspectRatio = 3 / 4

// get the minimum size of the canvas and calculate the width and height
const canvasMinSize = Math.min(window.innerWidth, window.innerHeight)
const sizes = getSizes(aspectRatio)

// create a p5 sketch
const sketch = (p) => {

  p.setup = () => {
    p.createCanvas(sizes.width, sizes.height)
  }

  p.draw = () => {
    p.background(220)
  }


  // resize the canvas when the window is resized
  p.windowResized = () => {
    const newSizes = getSizes(aspectRatio)
    sizes.width = newSizes.width
    sizes.height = newSizes.height
    p.resizeCanvas(sizes.width, sizes.height)
  }
}

// create a new instance of p5 and run the sketch
new p5(sketch)

// helper function to get the sizes of the canvas
function getSizes(aspectRatio) {
  const sizes = {}
  if (window.innerWidth / window.innerHeight > aspectRatio) {
    sizes.width = ~~(window.innerHeight * aspectRatio)
    sizes.height = ~~window.innerHeight
  } else {
    sizes.width = ~~window.innerWidth
    sizes.height = ~~(window.innerWidth / aspectRatio)
  }
  return sizes
}
```

The Vite server has hot module replacement (HMR) enabled, so changes to your files will automatically update in the browser.

---

## NPM scripts 🤖

### Dev 💻

Run the development server and automatically open the application in your default browser.
```bash
npm run dev
```


### Build 🔨

Build the project for production. This command will generate an optimized version of the project in the dist directory.
```bash
npm run build
```


### Preview 🔍

Preview the built project in your browser. This command will serve the production-ready version on a local server.
```bash
npm run preview
```
