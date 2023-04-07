const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 2048
canvas.height = 2048

var frame = 0
function animate() {
    requestAnimationFrame(animate)
    for (x = 0; x < 10; x++) {
        for (y = 0; y < 10; y++) {
            ctx.beginPath()
            ctx.arc((x)*canvas.width/10 + Math.cos(frame*Math.PI/x/50) * canvas.width*0.03, (y)*canvas.height/10 + Math.sin(frame*Math.PI/y/50) * canvas.height*0.03, 2, 0, 2*Math.PI)
            ctx.closePath()
            ctx.fillStyle = "white"
            ctx.fill()
        }
    }
    frame++
}
animate()