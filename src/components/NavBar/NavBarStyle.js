
  export const navBarStyle = (theme) => ({
    navBarIcon:{
      borderRadius: '1em',
      // '&:hover':{
      //   backgroundColor: '#D5A17F',
      //   // color:'#D5A17F'
      // }
    },
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
      // '&:hover':{
      //   backgroundColor: 'transparent',
      // }
    },
    imgNavBar:{
      width: "2.5em",
    }
  });