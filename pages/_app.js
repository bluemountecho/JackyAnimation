import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import './app.scss'
import Star from '../src/components/star'

export default function MyApp(props) {
    const { Component, pageProps } = props;
    var datas = []

    for (var i = 0; i < 200; i ++) {
        datas.push(i)
    }

    useEffect(() => {
        $("body").mousemove(function(e){
            var mouse = $(".mouse");
            mouse.css({
                left: e.pageX,
                top: e.pageY,
                opacity: 1,
            });
        });

        $('#stats').remove()
    }, [])

    console.log(datas)

    return (
        <React.Fragment>
            <Head>
                <title>Animation</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r50/three.min.js"></script>
            </Head>
            <ThemeProvider theme={theme}>
                <div id="stars-sky">
                {datas.map(value => {
                    return <Star key={value} idx={value} />
                })}
                </div>
                <CssBaseline />
                <Component {...pageProps} />
                <div className="mouse cursor"></div>
                <div className="mouse follow-cursor first"></div>
                <div className="mouse follow-cursor second"></div>
                <div className="mouse follow-cursor third"></div>
                <div className="mouse follow-cursor fourth"></div>
                <div className="mouse follow-cursor fifth"></div>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};