import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import styles from './style'
import $ from 'jquery'
import initBackground from '../../../pages/app.js'
import LogoImage from '../../components/logoImage'
import LogoText from '../../components/logoText'

const useStyles = makeStyles(styles);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function AboutPage(props) {
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

    async function logoAnimation() {
        var timeUnit = 300

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
    }

    async function init() {
        FadeInAnimation($('#logo-div'), '-', '+')
        FadeInAnimation($('.jbutton.contact'), '-', '+')
        await FadeInAnimation($('.jbutton.projects'), '+', '-')

        // await logoAnimation()
        if (window.innerWidth <= 500) {
            await Animate($('#logo-div'), {
                left: '20px',
                top: '30px',
                width: '50px',
                height: '50px',
            }, 500)
        } else {
            await Animate($('#logo-div'), {
                left: '70px',
                top: '30px',
                width: '50px',
                height: '50px',
            }, 500)
        }
        
        FadeInAnimation($('.sentence'), '-', '+')

        // $('.sentence').css('opacity', 1)
        $('#logo-text').css('opacity', 1)

        logoAnimation()
        // window.loader.triggerCharacters()
        setTimeout(() => {
            $('.sentence span').addClass('fire-text')
        }, 4000)

        await Animate($('#logo-text'), {
            trans: 1,
            }, {
            step: function(now, fx) {
                $(this).css('transform', 'scale(' + (now * 1.2) + ')')
            },
            duration: 300,
            easing: "linear",
        })

        Animate($('#logo-text'), {
            trans: 1,
            }, {
            step: function(now, fx) {
                $(this).css('transform', 'scale(' + (1 + (1 - now) * 0.2) + ')')
            },
            duration: 100,
            easing: "linear",
        })

        flag = true
    }

    useEffect(() => {
        initBackground()
        // window.loader.init()
        // window.loader.animate()
        // window.loader.setUpCharacters()
        setTimeout(init, 300)

        $(document).ready(function(){
            $('body').bind('mousewheel', function(e) {
                if (!flag) return
                if(e.originalEvent.wheelDelta / 120 < 0) {
                    router.push('/projects')
                    flag = false
                } else {
                    router.push('/')
                    flag = false
                }
            });

            $('body').bind('touchmove', function(e) { 
                if (!flag) return
                if ($(window).scrollTop() > 0 && befTop > 0) {
                    router.push('/projects')
                    flag = false
                } else if ($(window).scrollTop() == 0 && befTop == 0) {
                    router.push('/')
                    flag = false
                }

                befTop = $(window).scrollTop()
            });
        });
    }, [])

    function onProjects() {
        router.push('/projects')
        flag = false
    }

    function goHome() {
        router.push('/')
    }

    return (
        <>
            <div className="mainContainer">
                <div id="stars-sky"></div>
                <div className={classes.logo} onClick={goHome} id="logo-div">
                    <LogoImage />
                </div>
                <div className={classes.logotext} onClick={goHome} id="logo-text">
                    <LogoText />
                </div>
                <h1 className={"sentence " + classes.about}>LinkDAP is a boutique web development agency specializing in design, development, branding, and everything in between.</h1>
                <button className={"jbutton projects " + classes.projectButton} onClick={onProjects}>VIEW PROJECTS</button>
                <a href="mailto:support@gmail.com"><button className={"jbutton contact " + classes.contactButton}>CONTACT</button></a>
            </div>
        </>
    )
}
  
export default AboutPage