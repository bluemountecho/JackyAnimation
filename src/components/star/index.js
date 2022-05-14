import React, {useEffect, useState} from 'react'
import $ from 'jquery'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function Star(props) {
    const [style, setStyle] = useState({})
    var W, H, CX, CY, X, Y, Speed, SpeedR, Radius, Distance, Color, Angle, Acc, AccR

    function DecToHex(val) {
        var ret = val.toString(16)

        if (ret.length == 1) return '0' + ret

        return ret
    }

    function updateStyle(x, y) {
        setStyle({
            'background': Color,
            'transform': 'translate(' + x + 'px, ' + y + 'px)',
            // 'left': x + 'px',
            // 'top': y + 'px',
            'width': Radius / 2,
            'height': Radius / 2,
            'boxShadow': '0px 0px ' + (Radius) + 'px ' + (Radius / 2) + 'px ' + Color + ', 0px 0px ' + (Radius * 3) + 'px ' + (Radius) + 'px ' + Color,
        })
    }

    function moveStar() {
        Distance += Speed
        Radius += SpeedR

        Speed += Acc
        SpeedR += Acc / 300.0
        
        var tmpX = X + Distance * Math.cos(Angle)
        var tmpY = Y + Distance * Math.sin(Angle)

        if (tmpX < -10 || tmpY < -10 || tmpX > W + 10 || tmpY > H + 10) {
            init(false)
            return
        }

        updateStyle(tmpX, tmpY)
        setTimeout(moveStar, 50)
    }

    function init(isFirst = true) {
        var R = Math.round(Math.random() * 105) + 150
        var G = Math.round(Math.random() * 105) + 150
        var B = Math.round(Math.random() * 105) + 150

        Color = '#' + DecToHex(R) + DecToHex(G) + DecToHex(B)
        W = window.innerWidth
        H = window.innerHeight
        CX = W / 2.0
        CY = H / 2.0

        if (isFirst) {
            X = Math.random() * W
            Y = Math.random() * H
        } else {
            X = Math.random() * W * 0.3 + W * 0.35
            Y = Math.random() * H * 0.5 + H * 0.25
        }
        
        Angle = Math.atan2(Y - CY, X - CX)

        var tmp = Math.random()

        if (isFirst) {
            if (tmp > 0.95) Radius = 1
            else if (tmp > 0.8) Radius = 0.5
            else Radius = 0.2
        } else {
            Radius = 0.3
        }

        Distance = 0
        Speed = Math.random() * 0.1 + 0.05
        SpeedR = Math.random() / 1000.0
        Acc = (Math.random() + 0.3) / 1000.0

        moveStar()
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div className="jstar" style={style} ></div>
    )
}
  
export default Star