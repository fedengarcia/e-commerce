import Card from './components/Card';
import NavBar from './components/NavBar';
import AccordionSimple from './components/AccordionSimple'
import { makeStyles } from '@material-ui/core/styles';
import imgBackground from './img/crumpled-white-paperboard.jpg';

const useStyles = makeStyles((theme) => ({

  bodyClass:{
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    backgroundImage: `url(${imgBackground})`,
    backgroundPosition: "center",
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    height: "100vh",

  }
}));


function App() {
  const classes = useStyles();
  return (
    <>
    <body className={classes.bodyClass}>
        <NavBar />
        <AccordionSimple />
        <div></div>
        <Card></Card>
        
        <button>BOTON</button>
    </body>
    </>
  );
}

export default App;


// El import va con {} cuando usamos export const
// con export default, usamos directamente el nombre
