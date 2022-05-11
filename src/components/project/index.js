import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import styles from './style'
import $ from 'jquery'

const useStyles = makeStyles(styles);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function Project(props) {
    const classes = useStyles()
    const router = useRouter()

    useEffect(() => {
    }, [])

    return (
        <>
            <a href={props.link} target="_blank">
                <div className={classes.container + ' project-container'}>
                    <div className={classes.image}>
                        <img className="project-image" src={props.image} />
                    </div>
                    <div className={classes.description + ' project-desc'}>
                        <h3>{props.description}</h3>
                        <h4>Client: {props.client}</h4>
                        <div className={classes.arrow}>
                            <svg viewBox="0 0 30.057 30.057">
                                <path style={{fill: "#dddddd"}} d="M4.403,25.652c5.867,5.873,15.383,5.873,21.25,0c5.869-5.867,5.867-15.383-0.002-21.248 C19.785-1.469,10.269-1.469,4.403,4.408C-1.462,10.273-1.462,19.785,4.403,25.652z M23.878,6.18c4.887,4.885,4.887,12.814,0,17.695 c-4.887,4.891-12.814,4.891-17.701,0.004C1.29,18.99,1.29,11.065,6.177,6.18S18.989,1.295,23.878,6.18z"/>
                                <path style={{fill: "#dddddd"}} d="M19.941,20.062l-7.008-0.666c0,0-0.936,0.027-0.414-0.494c0.523-0.523,1.789-1.789,1.789-1.789 s-0.307-0.305-0.779-0.775c-1.352-1.354-3.805-3.805-4.803-4.805c0,0-0.342-0.199,0.07-0.613c0.41-0.41,2.223-2.219,2.516-2.516 c0.297-0.291,0.514-0.061,0.514-0.061c0.975,0.973,3.51,3.51,4.814,4.814c0.422,0.422,0.816,0.814,0.816,0.814 s1.016-1.014,1.65-1.65c0.633-0.633,0.539,0.367,0.539,0.367s0.859,6.117,0.859,6.871C20.51,20.107,19.941,20.062,19.941,20.062z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}
  
export default Project