import NavBar from './components/NavBar/NavBar';
import imgBackground from './img/crumpled-white-paperboard.jpg';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import {CartContext} from './Context/CartContext'
import DialogContainer from './components/DialogContainer/DialogContainer';


const useStyles = makeStyles((theme) => ({
  container:{
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    backgroundImage: `url(${imgBackground})`,
    backgroundPosition: "center",
    backgroundSize: 'cover',
    backgroundRepeat: "repeat",
    minHeight: "100vh",
  },

}));


function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      
      <CartContext>
        <BrowserRouter> 
          <NavBar />
          <Switch>
              
              <Route exact path="/">
                  <ItemListContainer/>
              </Route>

              
              <Route path="/item/:id">
                    <ItemDetailContainer/>
              </Route>
              
              <Route path="/category/:marca">
                  <ItemListContainer/>
              </Route>

              <Route path="/cart">
                  <CartContainer/>
              </Route>

              <Route path="/dialog/:dialogType">
                  <DialogContainer/>
              </Route>
          </Switch>
      </BrowserRouter>
    </CartContext>
    </div>
  );
}

export default App;


// El import va con {} cuando usamos export const
// con export default, usamos directamente el nombre
