
export const ItemStyle = (theme) => ({
    root: {
        width: '70%',
        backgroundColor: '#A9CCE3',
        borderRadius: '1em',
        transition: '1s',
        '&:hover':{
            width:'75%'
        }
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
  
});