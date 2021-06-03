export const navBarStyle = theme => {
  return ({
    root: {
      flexGrow: 1,
      backgroundColor: "rgba(182, 124, 69);"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    bar: {
      display: "flex",
      justifyContent: "space-between",
    },
    navContainer:{
      width: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  
    },
    listClass:{
      display: "flex",
      flexDirection: "row",

      '& li':{
        border: "solid 1px white",
        margin: "1em",
        listStyle: "none",
        borderRadius: 10,
      }
    }
  })
}