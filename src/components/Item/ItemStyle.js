// import { fadeIn } from 'react-animations';

export const ItemStyle = (theme) => ({
    root: {
        margin: '2em',
        width: '70%',
        animationName: 'slideInUp',
        animationDuration: '1s'
    },
    cardContainer:{
        backgroundColor: '#AF91F7',
        borderRadius: '1em',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        margin: '1em',
        borderRadius: '1em'
    },
    actionContainer:{
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    button:{
        '&:hover':{
            backgroundColor: '#dc2430',
            color: 'white'
        }
    }

  
});