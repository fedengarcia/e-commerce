
  export const navBarStyle = (theme) => ({
    grow: {
      flexGrow: 1,
      marginBottom: '2em',
    },
    appBarStyle:{
      background: 'linear-gradient(to right,#7b4397,#dc2430)'
    },
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    imgNavBar:{
      width: "2.5em",
    },
    menuIcon:{
      width: "1.5em",
    },

    linkStyle:{
      margin: "1rem",
      textDecoration: "none",
      color: 'black',
      fontWeight: 'normal',
      lineHeight: '1em',
      textShadow: '1px 1px 2px #082b34',
      '&:hover':{
        backgroundColor: 'whiteGrey',
        opacity: '0.5',
        borderRadius: '1em'
      }
    },
    
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '20%',
        marginRight: '1em',
      },
    },
  
    sectionMobile: {
      display: 'flex',
      marginLeft: '-2em',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    logo:{
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },

  });