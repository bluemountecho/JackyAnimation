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
        }
    },

    'logotext': {
        'position': 'absolute',
        'left': '130px',
        'top': '50px',
        'width': '100px',
        'opacity': '0',
        'transformOrigin': 'center',
    }
});

export default styles;