const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let idx = 1
let speed = 150 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0,idx)
    idx++

    if (idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => {
    speed = 150 / e.target.value
})