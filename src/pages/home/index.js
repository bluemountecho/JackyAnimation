import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import styles from './style'
import $ from 'jquery'
import initBackground from '../../../pages/app.js'
import LogoImage from '../../components/logoImage'

const useStyles = makeStyles(styles);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function HomePage(props) {
    const classes = useStyles()
    const router = useRouter()
    var flag = false
    var befTop = -1

    async function Animate(elem, data, time) {
        $(elem).animate(data, time)
        
        if (time.duration) await delay(time.duration)
        else await delay(time)

        $(elem).css('trans', 0)
    }

    async function FadeInAnimation(elem, org, next) {
        await Animate($(elem), {
            top: org + "=100px"
        }, 100)

        await Animate($(elem), {
            top: next + "=100px",
            opacity: 1
        }, 700)
    }

    async function init() {
        FadeInAnimation($('#logo-div'), '-', '+')
        await FadeInAnimation($('.jbutton'), '+', '-')

        flag = true
    }

    useEffect(() => {
        initBackground()
        setTimeout(init, 300)

        $(document).ready(function(){
            $('body').bind('mousewheel', function(e) {
                if (!flag) return
                if(e.originalEvent.wheelDelta / 120 < 0) {
                    router.push('/about')
                    flag = false
                }
            });
        });
    }, [])

    function onHello() {
        router.push('/about')
        flag = false
    }

    return (
        <>
            <div className="mainContainer">
                <div id="stars-sky"></div>
                <div className={classes.logo} id="logo-div">
                    <LogoImage />
                </div>
                <button className={"jbutton " + classes.helloButton} onClick={onHello}>HELLO</button>
            </div>
        </>
    )
}
  
export default HomePage