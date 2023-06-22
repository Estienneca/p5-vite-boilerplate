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
