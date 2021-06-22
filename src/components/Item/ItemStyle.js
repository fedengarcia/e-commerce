// import { fadeIn } from 'react-animations';

export const ItemStyle = (theme) => ({
    root: {
        width: '70%',
        // transition: '1s',
        // '&:hover':{
        //     width:'75%'
        // }
        animationName: 'slideInUp',
        animationDuration: '1s'
    },
    cardContainer:{
        backgroundColor: '#AF91F7',
        borderRadius: '1em',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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