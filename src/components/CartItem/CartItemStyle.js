
export const CartItemStyle = (theme) => ({
    cartItemContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& > div':{
            width: 'auto',
            '& > img':{
                width: '4em',
            }
        }
    },
    cartItem:{
        margin: '0.5em'
    },
})