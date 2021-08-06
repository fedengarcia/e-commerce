export const FormContainerStyle = (theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
    },
    titleContainer:{
        display: 'flex',
        justifyContent: 'center',
        aligItems: 'center',
        '& > h2':{
            fontWeight: 'normal',
            lineHeight: '1em',
            textShadow: '1px 1px 2px #082b34',
        }
    },
})