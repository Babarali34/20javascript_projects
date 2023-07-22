setInterval(updateClock,1000)
const hourhand = document.querySelector("#hour")
const minthand = document.querySelector("#mint")
const secondhand = document.querySelector("#second")


function  updateClock(){
      const date = new Date( )
      const hours = date.getHours()
       const mints = date.getMinutes()
       const seconds = date.getSeconds()

       hourhand.style.transform = `rotate(${hours * 30}deg)`
       minthand.style.transform = `rotate(${mints * 6}deg)`
       secondhand.style.transform = `rotate(${seconds * 6}deg)`

    //   setTimeout(updateClock,1000)

}

updateClock()