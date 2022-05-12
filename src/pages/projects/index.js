import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import styles from './style'
import $ from 'jquery'
import initBackground from '../../../pages/app.js'
import Project from '../../components/project'
import LogoImage1 from '../../components/logoImage1'

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
        FadeInAnimation($('.sentence'), '-', '+')
        FadeInAnimation($('.project-container'), '+', '-')
        await FadeInAnimation($('.jbutton.projects'), '+', '-')
        logoAnimation()
    }

    useEffect(() => {
        initBackground()
        setTimeout(init, 300)

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
                    <LogoImage1 />
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