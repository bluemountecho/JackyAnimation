import { createStyles } from '@material-ui/styles'
import theme from '../../theme'

const styles = createStyles({
    'container': {
        width: '60vw',
        height: '40vw',
        margin: '0px auto',
        display: 'block',
        marginBottom: '100px',
        zIndex: '100',
        position: 'relative',
        pointerEvents: 'none',
        opacity: '0',

        '&:hover': {
            '& .project-image': {
                transformOrigin: 'center',
                transform: 'scale(1.1) rotate3d(0, 0, 1, -1deg)',
            },

            '& .project-desc': {
                transformOrigin: 'center',
                transform: 'scale(1.1) rotate3d(0, 0, 1, 1deg)',
            },

            '& svg': {
                transformOrigin: '-30px -30px',
                transform: 'scale(1.1)',
            }
        }
    },

    'image': {
        width: '90%',
        height: '90%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        pointerEvents: 'initial',
        border: '2px solid white',

        '& img': {
            width: '100%',
            height: '100%',
            transition: '1s ease 0s',
        }
    },

    'description': {
        position: 'absolute',
        background: '#222222',
        color: '#dddddd',
        right: '0px',
        bottom: '0px',
        width: '30%',
        height: '30%',
        transition: '1s ease 0s',
        pointerEvents: 'initial',
        border: '2px solid white',

        '& h3': {
            position: 'absolute',
            left: '1.5vw',
            top: '2vw',
            width: '100%',
            margin: '0px',
            fontSize: '1.5vw',
            lineHeight: '1.7vw',
            fontFamily: 'Roboto',
            fontWeight: '600',
        },
        
        '& h4': {
            position: 'absolute',
            left: '1.5vw',
            bottom: '1.5vw',
            margin: '0px',
            fontSize: '0.8vw',
            lineHeight: '1vw',
            fontFamily: 'Roboto',
            fontWeight: '400',
        },
    },

    'arrow': {
        position: 'absolute',
        right: '1.5vw',
        bottom: '1.5vw',
        margin: '0px',

        '& svg': {
            width: '2vw',
            height: '2vw',
        }
    }
});

export default styles;