function getCenter(sky) {
    const w = sky.clientWidth
    const h = sky.clientHeight

    return {
        x: parseInt(w / 2),
        y: parseInt(h / 2),
    }
}
  
function getDot(x, y, group) {
    if (typeof document == 'undefined') return
    const size = Math.round(Math.random() * 4 + 1)
    const dot = document.createElement('span')
    dot.classList.add('stars-star', `stars-fast-axis-${group}`, `stars-size-${size}`)
    dot.style.top = `${y}px`
    dot.style.left = `${x}px`

    return dot.cloneNode()
}
  
export default function init() {
    if (typeof document == 'undefined') return
    const sky = document.querySelector('#stars-sky')
    sky.innerHTML = ''
    for (let i = 1; i <= 360; i++) {
      const { x, y } = getCenter(sky)
      const dot = getDot(x, y, i)
      sky.appendChild(dot)
    }

    setTimeout(() => {
        for (let i = 1; i <= 360; i++) {
            var elem = $('.stars-fast-axis-' + i)

            $(elem).removeClass('stars-fast-axis-' + i)
            $(elem).addClass('stars-axis-' + i)
        }
    }, 1000)
}