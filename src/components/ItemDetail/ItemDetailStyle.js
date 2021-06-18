
export const ItemDetailStyle = (theme) => ({
    root: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1em',
        '@media (max-width: 1500px)':{
            width: '80%',
        },
    },
    cardContainer:{
        backgroundColor: '#A9CCE3',
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        '&:hover':{
            backgroundColor: '#D5A17F',
        }
    }

});