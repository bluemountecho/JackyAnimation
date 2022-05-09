import { createStyles } from '@material-ui/styles'
import theme from '../../theme'

const styles = createStyles({
    'logo': {
        'position': 'absolute',
        'width': '50px',
        'height': '50px',
        'top': '30px',
        'left': '70px',
        'opacity': '0',

        '& > svg': {
            'width': '100%',
            'height': '100%',
        },

        [theme.breakpoints.down('500')]: {
            left: '20px',
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
        position: 'relative',
        top: '0px',
        width: '40vw',
        marginTop: '100px',
        marginBottom: '50px',
        fontSize: '1.2vw',
        [theme.breakpoints.down('1000')]: {
            width: '60vw',
            fontSize: '2vw',
            marginBottom: '30px',
        },
        [theme.breakpoints.down('500')]: {
            fontSize: '3vw',
            width: '90vw',
            marginBottom: '30px',
        },
    },

    'contactButton': {
        position: 'absolute',
        right: '70px',
        top: '40px',
        [theme.breakpoints.down('500')]: {
            right: '20px',
        },
    },
});

export default styles;