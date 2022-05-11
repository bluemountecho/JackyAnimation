import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import styles from './style'
import $ from 'jquery'
import initBackground from '../../../pages/app.js'
import Project from '../../components/project'
import LogoImage from '../../components/logoImage'
import LogoText from '../../components/logoText'

const useStyles = makeStyles(styles);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function ProjectsPage(props) {
    const classes = useStyles()
    const router = useRouter()
    const projects = [
        {
            'image': '/images/project_1.avif',
            'description': 'An immersive Spatial Audio Experience for Opera North',
            'client': 'Opera North',
            'link': 'https://www.example.com/project1',
        },
        {
            'image': '/images/project_2.avif',
            'description': 'An immersive Spatial Audio Experience for Opera North',
            'client': 'Opera North',
            'link': 'https://www.example.com/project2',
        },
        {
            'image': '/images/project_3.avif',
            'description': 'An immersive Spatial Audio Experience for Opera North',
            'client': 'Opera North',
            'link': 'https://www.example.com/project3',
        },
        {
            'image': '/images/project_4.avif',
            'description': 'An immersive Spatial Audio Experience for Opera North',
            'client': 'Opera North',
            'link': 'https://www.example.com/project4',
        },
        {
            'image': '/images/project_5.avif',
            'description': 'An immersive Spatial Audio Experience for Opera North',
            'client': 'Opera North',
            'link': 'https://www.example.com/project5',
        },
    ]
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
        FadeInAnimation($('.sentence'), '-', '+')
        FadeInAnimation($('.project-container'), '+', '-')
        await FadeInAnimation($('.jbutton.projects'), '+', '-')
        logoAnimation()

        $('#logo-text').css('opacity', 1)

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
        setTimeout(init, 300)

        $(document).ready(function() {
            $('body').bind('mousewheel', function(e) {
                if (!flag) return
                if (window.scrollY != 0) return
                if(e.originalEvent.wheelDelta / 120 > 0) {
                    router.push('/about')
                    flag = false
                }
            });

            $('body').bind('touchmove', function(e) { 
                if (!flag) return
                if ($(window).scrollTop() == 0 && befTop == 0) {
                    router.push('/about')
                    flag = false
                }

                befTop = $(window).scrollTop()
            });
        });

        var width = window.innerWidth
        var height = window.innerHeight

        $('body').mousemove(function (e) {
            var x = e.originalEvent.x
            var y = e.originalEvent.y
            var offsetX = Math.abs(x - width / 2) / width
            var offsetY = Math.abs(y - height / 2) / height
            var signX = x - width / 2 > 0 ? '-' : ''
            var signY = y - height / 2 > 0 ? '-' : ''
            
            $('.project-container').css('transform', 'translate(' + signX + '' + (offsetX * 20) + 'px,' + signY + '' + (offsetY * 20) + 'px)')
        })
    }, [])

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
                <a href="mailto:support@gmail.com"><button className={"jbutton contact " + classes.contactButton}>CONTACT</button></a>
                <h2 className={"sentence " + classes.about}>
                    We specialize in creating platform agnostic web apps, custom CMS and Ecommerce themes, server administration, data migration and management, site migration and maintenance, branding, UX/UI design, and project mtanagement.
                </h2>
                {projects.map((value, key) => {
                    return <Project
                        key={key}
                        image={value.image}
                        description={value.description}
                        client={value.client}
                        link={value.link}
                    />
                })}
            </div>
        </>
    )
}
  
export default ProjectsPage