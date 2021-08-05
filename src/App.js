import { makeStyles } from '@material-ui/core/styles';
import { AppStyle } from './AppStyle';
import {CartContext} from './Context/CartContext'
import Router from './components/Router/Router';


const useStyles = makeStyles((theme) => AppStyle(theme));

function App() {
  const classes = useStyles();

  return (
    <main className={classes.container}>
      
      <CartContext>
        <Router/>
        
      </CartContext>
    </main>
  );
}

export default App;


