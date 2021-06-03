import Card from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';
import AccordionSimple from './components/Accordion/AccordionSimple'
import imgBackground from './img/crumpled-white-paperboard.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container:{
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
    <div className={classes.container}>
        <NavBar />
        <AccordionSimple />
        <Card></Card>
        
        <button>BOTON</button>
    </div>
  );
}

export default App;


// El import va con {} cuando usamos export const
// con export default, usamos directamente el nombre
