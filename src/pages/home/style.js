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
        }
    },

    'helloButton': {
        left: 'calc(50vw - 65px)',
        top: '65vh',
    },
});

export default styles;