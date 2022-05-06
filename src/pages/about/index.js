import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import styles from './style'
import $ from 'jquery'
import initBackground from '../../../pages/assets/app.js'

const useStyles = makeStyles(styles);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function AboutPage(props) {
    const classes = useStyles()
    const router = useRouter()
    var flag = false

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
        await Animate($('#logo-div'), {
            left: '70px',
            top: '30px',
            width: '50px',
            height: '50px',
        }, 500)

        $('.sentence').css('opacity', 1)
        $('#logo-text').css('opacity', 1)

        logoAnimation()
        window.loader.triggerCharacters()
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
        window.loader.setUpCharacters()
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
        });
    }, [])

    function onProjects() {
        router.push('/projects')
        flag = false
    }

    return (
        <>
            <div className="mainContainer">
                <div id="stars-sky"></div>
                <div className={classes.logo} id="logo-div">
                    <svg viewBox="0 -100 428 528" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="logo-part-0" d="M7.43845 112.136L196.051 203.299C200.962 205.643 207.517 206.867 214.005 206.867C220.493 206.867 227.047 205.643 231.949 203.299L420.562 112.136C430.479 107.355 430.479 99.5313 420.562 94.7302L231.949 3.56733C227.047 1.22418 220.483 0 214.005 0C207.527 0 200.962 1.22418 196.051 3.56733L7.43845 94.7302C-2.47948 99.5313 -2.47948 107.335 7.43845 112.136V112.136Z" fill="#5571FF"/>
                        <path id="logo-part-1" d="M420.593 205.312C420.593 205.312 386.165 189.204 381.6 187.035C377.035 184.867 375.804 184.987 371.009 187.147C366.215 189.306 231.963 252.235 231.963 252.235C226.304 254.606 220.191 255.788 214.028 255.701C207.563 255.701 200.992 254.506 196.093 252.235C196.093 252.235 65.4026 191.067 59.2716 188.12C52.6344 185.015 50.7244 185.015 44.6793 187.795L7.43461 205.201C-2.4782 209.834 -2.4782 217.425 7.43461 222.068L195.979 310.41C200.878 312.681 207.439 313.867 213.913 313.867C220.388 313.867 226.949 312.681 231.858 310.41L420.373 222.087C430.505 217.527 430.505 209.964 420.593 205.312V205.312Z" fill="#5571FF"/>
                        <path id="logo-part-2" d="M420.578 319.46C420.578 319.46 386.144 303.372 381.578 301.178C377.012 298.984 375.78 299.132 370.985 301.289C366.19 303.446 232.025 366.44 232.025 366.44C226.364 368.805 220.251 369.982 214.087 369.893C207.621 369.893 201.049 368.708 196.139 366.44C196.139 366.44 65.4227 305.343 59.3 302.4C52.6138 299.261 50.7034 299.261 44.6953 302.076L7.44325 319.46C-2.48108 324.089 -2.48108 331.661 7.44325 336.308L195.996 424.547C200.896 426.917 207.458 428 213.934 428C220.41 428 226.973 426.815 231.873 424.547L420.464 336.355C430.493 331.661 430.493 324.107 420.578 319.46Z" fill="#5571FF"/>
                    </svg>
                </div>
                <div className={classes.logotext} id="logo-text">
                    <svg viewBox="0 0 149 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.93831 23.68H11.8878V26.7921H0.0819807V3.28203H3.93831V23.68ZM19.7453 5.68379C19.0462 5.68379 18.4599 5.44699 17.9863 4.97341C17.5127 4.49982 17.2759 3.91348 17.2759 3.21438C17.2759 2.51528 17.5127 1.92894 17.9863 1.45535C18.4599 0.981769 19.0462 0.744977 19.7453 0.744977C20.4219 0.744977 20.9969 0.981769 21.4705 1.45535C21.9441 1.92894 22.1809 2.51528 22.1809 3.21438C22.1809 3.91348 21.9441 4.49982 21.4705 4.97341C20.9969 5.44699 20.4219 5.68379 19.7453 5.68379ZM21.6396 8.15319V26.7921H17.7833V8.15319H21.6396ZM38.7773 7.84874C40.2431 7.84874 41.5511 8.15319 42.7013 8.76208C43.874 9.37098 44.7873 10.273 45.4413 11.4683C46.0953 12.6635 46.4223 14.1068 46.4223 15.7982V26.7921H42.5998V16.3733C42.5998 14.7044 42.1826 13.4303 41.3482 12.5508C40.5138 11.6487 39.3749 11.1977 37.9316 11.1977C36.4883 11.1977 35.3382 11.6487 34.4812 12.5508C33.6468 13.4303 33.2296 14.7044 33.2296 16.3733V26.7921H29.3733V8.15319H33.2296V10.2843C33.861 9.51756 34.6616 8.91994 35.6313 8.49146C36.6236 8.06298 37.6723 7.84874 38.7773 7.84874ZM61.3863 17.4896L69.9784 26.7921H64.769L57.8682 18.775V26.7921H54.0119V1.7598H57.8682V16.3056L64.6337 8.15319H69.9784L61.3863 17.4896ZM84.5465 2.84228C87.0497 2.84228 89.2372 3.34969 91.109 4.36451C93.0034 5.37934 94.4579 6.78881 95.4728 8.59294C96.4876 10.3971 96.995 12.4493 96.995 14.7495C96.995 17.0273 96.4876 19.0795 95.4728 20.9061C94.4579 22.7328 93.0034 24.1761 91.109 25.2361C89.2372 26.2734 87.0497 26.7921 84.5465 26.7921H74.5674V2.84228H84.5465ZM83.8699 20.0943C85.5613 20.0943 86.9031 19.632 87.8954 18.7074C88.8877 17.7827 89.3838 16.4635 89.3838 14.7495C89.3838 13.0356 88.8877 11.7163 87.8954 10.7917C86.9031 9.86711 85.5613 9.40481 83.8699 9.40481H82.0771V20.0943H83.8699ZM101.363 17.2528C101.363 15.2457 101.701 13.5092 102.377 12.0433C103.076 10.5549 104.024 9.42736 105.219 8.6606C106.414 7.87129 107.756 7.47664 109.244 7.47664C110.485 7.47664 111.556 7.73598 112.458 8.25467C113.36 8.75081 114.048 9.43863 114.521 10.3181V7.71343H121.997V26.7921H114.521V24.1874C114.048 25.0669 113.36 25.766 112.458 26.2847C111.556 26.7808 110.485 27.0289 109.244 27.0289C107.756 27.0289 106.414 26.6455 105.219 25.8788C104.024 25.0895 103.076 23.9619 102.377 22.496C101.701 21.0076 101.363 19.2599 101.363 17.2528ZM114.521 17.2528C114.521 16.2379 114.262 15.4486 113.743 14.8849C113.225 14.3211 112.559 14.0392 111.748 14.0392C110.936 14.0392 110.27 14.3211 109.752 14.8849C109.233 15.4486 108.974 16.2379 108.974 17.2528C108.974 18.2676 109.233 19.0569 109.752 19.6207C110.27 20.1845 110.936 20.4664 111.748 20.4664C112.559 20.4664 113.225 20.1845 113.743 19.6207C114.262 19.0569 114.521 18.2676 114.521 17.2528ZM135.55 10.3181C136.023 9.43863 136.7 8.75081 137.579 8.25467C138.481 7.73598 139.553 7.47664 140.793 7.47664C142.281 7.47664 143.623 7.87129 144.818 8.6606C146.014 9.42736 146.95 10.5549 147.626 12.0433C148.325 13.5092 148.675 15.2457 148.675 17.2528C148.675 19.2599 148.325 21.0076 147.626 22.496C146.95 23.9619 146.014 25.0895 144.818 25.8788C143.623 26.6455 142.281 27.0289 140.793 27.0289C139.553 27.0289 138.481 26.7808 137.579 26.2847C136.7 25.766 136.023 25.0669 135.55 24.1874V35.9255H128.04V7.71343H135.55V10.3181ZM141.064 17.2528C141.064 16.2379 140.804 15.4486 140.286 14.8849C139.767 14.3211 139.102 14.0392 138.29 14.0392C137.478 14.0392 136.813 14.3211 136.294 14.8849C135.775 15.4486 135.516 16.2379 135.516 17.2528C135.516 18.2676 135.775 19.0569 136.294 19.6207C136.813 20.1845 137.478 20.4664 138.29 20.4664C139.102 20.4664 139.767 20.1845 140.286 19.6207C140.804 19.0569 141.064 18.2676 141.064 17.2528Z" fill="#5571FF"/>
                    </svg>
                </div>
                <h1 className="sentence" style={{top: 'calc(40vh - 50px)'}}>LinkDAP is a boutique web development agency specializing in</h1>
                <h1 className="sentence" style={{top: 'calc(40vh + 10px)'}}>design, development, branding, and everything in between.</h1>
                <button className="jbutton projects" style={{left: 'calc(50vw - 75px)', top: '65vh', width: '150px'}} onClick={onProjects}>VIEW PROJECTS</button>
                <a href="mailto:support@gmail.com"><button className="jbutton contact" style={{right: '70px', top: '40px'}}>CONTACT</button></a>
            </div>
        </>
    )
}
  
export default AboutPage