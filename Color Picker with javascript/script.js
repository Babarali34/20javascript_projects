const imageCanvas = document.getElementById('imageCanvas')
const colorPreview = document.getElementById('colorPreview')
const showColor = document.getElementById('show-color')

function updateColorPreview(color) {
  colorPreview.style.backgroundColor = color
  
  showColor.textContent = color
}


imageCanvas.addEventListener('click', (event) => {
  const canvasRect = imageCanvas.getBoundingClientRect()
  const x = event.clientX - canvasRect.left;
  const y = event.clientY - canvasRect.top;
  const ctx = imageCanvas.getContext('2d')
  const pixelData = ctx.getImageData(x, y, 1, 2).data
  const color = `rgba(${pixelData[0]},${pixelData[1]},${pixelData[2]},${pixelData[3] / 255})`
 updateColorPreview (color)
})



const image = new Image()

image.onload = function () {

  const ctx = imageCanvas.getContext('2d')
  ctx.drawImage(image,0,0, imageCanvas.clientWidth,imageCanvas.height)
}
  
image.src= 'img.jpg'