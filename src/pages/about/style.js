import { createStyles } from '@material-ui/styles'
import theme from '../../theme'

const styles = createStyles({
    'logo': {
        'position': 'absolute',
        'width': '40vh',
        'height': '40vh',
        'top': '20vh',
        'left': 'calc(50vw - 20vh)',
        'opacity': '0',

        '& > svg': {
            'width': '100%',
            'height': '100%',
        },
    },

    'logotext': {
        'position': 'absolute',
        'left': '130px',
        'top': '50px',
        'width': '100px',
        'opacity': '0',
        'transformOrigin': 'center',
        [theme.breakpoints.down('500')]: {
            left: '80px',
        },
    },

    'about': {
        top: 'calc(40vh - 50px)',
        padding: '0px 15vw',
        [theme.breakpoints.down('1000')]: {
            top: 'calc(35vh)',
            fontSize: '3vw',
        },
        [theme.breakpoints.down('500')]: {
            top: 'calc(20vh + 30vw)',
            fontSize: '6vw',
        },
    },

    'projectButton': {
        left: 'calc(50vw - 100px)',
        top: '65vh',
        width: '200px',
        [theme.breakpoints.down('1000')]: {
            top: 'calc(100vh - 100px)',
        },
    },

    'contactButton': {
        right: '70px',
        top: '50px',
        [theme.breakpoints.down('500')]: {
            right: '20px',
        },
    }
});

export default styles;