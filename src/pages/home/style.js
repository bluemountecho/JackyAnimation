import { createStyles } from '@material-ui/styles'
import theme from '../../theme'

const styles = createStyles({
    'logo': {
        'position': 'absolute',
        'width': '30vh',
        'height': '30vh',
        'top': '25vh',
        'left': 'calc(50vw - 15vh)',
        'opacity': '0',

        '& > svg': {
            'width': '100%',
            'height': '100%',
        }
    },

    'helloButton': {
        left: 'calc(50vw - 50px)',
        top: '65vh',
    },
});

export default styles;