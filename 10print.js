/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const w = process.stdout.columns
let offset = Math.random() * w
let length = Math.random() * (w - offset)

function draw () {
  setTimeout(draw, 100)
  let output = ' '.repeat(offset)
  for (let i = 0; i < length; i++) {
    let r = Math.random()
    if (r > 0.666) {
      output +='╳' 
    }
    else if (r <= 0.666 && r > 0.333){
      output += '╲' 
    }
    else{
      output += '╱' 
    }
  }
  console.log(output)

  if (Math.random() > 0.5) {
        offset += 1
        if (offset > w - length){
          offset = w - length
        }
        if (length > 2 && Math.random() > 0.5) {
          length -= 1
        }
  }
  else{
    offset -= 1
    if (offset < 0){
      offset = 0
    }
    if (length < w - 1 - offset && Math.random() > 0.5) {
        length += 1
      }
  }
}

draw()
