import NavBar from './components/NavBar/NavBar';
import imgBackground from './img/crumpled-white-paperboard.jpg';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContext from './components/Context/CartContext'

// import Router from './components/Router/Router';

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
    // display:"flex",
    // justifyContent:"center",
    // alignItems: "center",
    // flexDirection: "column",
    // width:"auto",
  },

}));


function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      
        
        <BrowserRouter> 
        <NavBar />
        <Switch>
            
            <Route exact path="/">
                <ItemListContainer/>
            </Route>

            
            <Route path="/item/:id">
                <CartContext>
                  <ItemDetailContainer/>
                </CartContext>
            </Route>
            
            <Route path="/category/:marca">
                <ItemListContainer/>
            </Route>

            <Route path="/cart">
              <Cart/>
            </Route>
           
            
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;


// El import va con {} cuando usamos export const
// con export default, usamos directamente el nombre
