import { yellow, pink } from '@material-ui/core/colors';

const styles = theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
    }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
    },
    yellow: {
        color: '#fff',
        backgroundColor: yellow[500],
    },
})
export default styles;