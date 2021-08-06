import React from 'react'
import NavBar from '../NavBar/NavBar';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import DialogContainer from '../DialogContainer/DialogContainer';
import CartContainer from '../CartContainer/CartContainer';
import FormContainer from '../FormContainer/FormContainer';


const Router = () => {

    return (<BrowserRouter> 
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

            <Route path="/Form">
                <FormContainer/>
            </Route>
        </Switch>
    </BrowserRouter>)
    
}
export default Router;