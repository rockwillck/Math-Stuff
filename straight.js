const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 512
canvas.height = 512

function xy(p, i) {
    return [
        canvas.width/2 + Math.cos(p/i*Math.PI*2 + (Math.PI)/i + Math.PI/2)*i**2*2, 
        canvas.height/2 + Math.sin(p/i*Math.PI*2 + (Math.PI)/i + Math.PI/2)*i**2*2
    ]
}

var frame = 0
function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (i=3;i<10;i++) {
        ctx.beginPath()
        for (p=0;p<i;p++) {
            ctx.lineTo(xy(p, i)[0], xy(p, i)[1])
        }
        ctx.closePath()
        ctx.strokeStyle = "white"
        ctx.lineWidth = 2
        ctx.stroke()

    }
    ctx.beginPath()
    for (i=3;i<10;i++) {
        length = Math.sqrt((xy(0, i)[0] - xy(1, i)[0])**2 + (xy(0, i)[1] - xy(1, i)[1])**2)
        coordLinear = (frame % (length*i))/length*5
        ctx.lineTo(
            xy(Math.floor(coordLinear), i)[0] - (xy(Math.floor(coordLinear), i)[0] - xy(Math.floor(coordLinear)+1, i)[0])*(coordLinear-Math.floor(coordLinear)), 
            xy(Math.floor(coordLinear), i)[1] - (xy(Math.floor(coordLinear), i)[1] - xy(Math.floor(coordLinear)+1, i)[1])*(coordLinear-Math.floor(coordLinear)))
    }
    ctx.strokeStyle = "white"
    ctx.stroke()
    frame++
}
animate()