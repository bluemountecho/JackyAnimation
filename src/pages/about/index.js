import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import styles from './style'
import $ from 'jquery'
import initBackground from '../../../pages/app.js'
import LogoImage from '../../components/logoImage'

const useStyles = makeStyles(styles);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function AboutPage(props) {
    const classes = useStyles()
    const router = useRouter()

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
        var timeUnit = 100

        await Animate($('#logo-div'), {
            trans: 1,
            }, {
            step: function(now, fx) {
                $(this).css('transform', 'scale(' + (now * 1.2) + ')')
            },
            duration: timeUnit,
            easing: "linear",
        })

        await Animate($('#logo-div'), {
            trans: 1,
            }, {
            step: function(now, fx) {
                $(this).css('transform', 'scale(' + ((1 - now) * 0.2 + 1) + ')')
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
                width: '90px',
                height: '90px',
            }, 500)
        } else {
            await Animate($('#logo-div'), {
                left: '70px',
                top: '30px',
                width: '90px',
                height: '90px',
            }, 500)
        }

        $('#logo-div img').attr('src', '/assets/images/logo1.png')
        FadeInAnimation($('.sentence'), '-', '+')
        logoAnimation()
    }

    useEffect(() => {
        initBackground()
        setTimeout(init, 300)
    }, [])

    function onProjects() {
        router.push('/projects')
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
                <h1 className={"sentence " + classes.about}>LinkDAP is a boutique web development agency specializing in design, development, branding, and everything in between.</h1>
                <button className={"jbutton projects " + classes.projectButton} onClick={onProjects}>VIEW PROJECTS</button>
                <a href="mailto:support@gmail.com"><button className={"jbutton contact " + classes.contactButton}>CONTACT</button></a>
            </div>
        </>
    )
}
  
export default AboutPage