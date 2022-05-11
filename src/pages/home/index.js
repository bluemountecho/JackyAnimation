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
        var timeUnit = 150

        FadeInAnimation($('#logo-div'), '-', '+')
        await FadeInAnimation($('.jbutton'), '+', '-')

        await Animate($('#logo-div #logo-part-0'), {
            trans: 1,
            }, {
            step: function(now, fx) {
                $(this).attr('transform', 'translate(0, -' + (now * 100.0) + ')')
            },
            duration: timeUnit,
            easing: "linear",
        })

        Animate($('#logo-div #logo-part-0'), {
            trans: 1,
            }, {
            step: function(now, fx) {
                $(this).attr('transform', 'translate(0, -' + ((1 - now) * 100.0) + ')')
            },
            duration: timeUnit,
            easing: "linear",
        })

        await Animate($('#logo-div #logo-part-1'), {
            trans: 1,
            }, {
            step: function(now, fx) {
                $(this).attr('transform', 'translate(0, -' + (now * 50.0) + ')')
            },
            duration: timeUnit,
            easing: "linear",
        })

        Animate($('#logo-div #logo-part-1'), {
            trans: 1,
            }, {
            step: function(now, fx) {
                $(this).attr('transform', 'translate(0, -' + ((1 - now) * 50.0) + ')')
            },
            duration: timeUnit,
            easing: "linear",
        })

        await Animate($('#logo-div #logo-part-2'), {
            trans: 1,
            }, {
            step: function(now, fx) {
                $(this).attr('transform', 'translate(0, -' + (now * 30.0) + ')')
            },
            duration: timeUnit,
            easing: "linear",
        })

        await Animate($('#logo-div #logo-part-2'), {
            trans: 1,
            }, {
            step: function(now, fx) {
                $(this).attr('transform', 'translate(0, -' + ((1 - now) * 30.0) + ')')
            },
            duration: timeUnit,
            easing: "linear",
        })

        flag = true
    }

    useEffect(() => {
        initBackground()
        // window.loader.init()
        // window.loader.animate()
        setTimeout(init, 300)

        $(document).ready(function(){
            $('body').bind('mousewheel', function(e) {
                if (!flag) return
                if(e.originalEvent.wheelDelta / 120 < 0) {
                    router.push('/about')
                    flag = false
                }
            });

            $('body').bind('touchmove', function(e) { 
                if (!flag) return
                if ($(window).scrollTop() > 0 && befTop > 0) {
                    router.push('/about')
                    flag = false
                }

                befTop = $(window).scrollTop()
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