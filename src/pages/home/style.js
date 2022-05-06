import { createStyles } from '@material-ui/styles'
import theme from '../../theme'

const styles = createStyles({
    'logo': {
        'position': 'absolute',
        'width': '30vh',
        'height': 'calc(30vh + 100px)',
        'top': 'calc(25vh - 100px)',
        'left': 'calc(50vw - 15vh)',
        'opacity': '0',

        '& > svg': {
            'width': '100%',
            'height': '100%',
        }
    }
});

export default styles;