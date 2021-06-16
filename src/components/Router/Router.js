import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


export default function Router (){

    return <BrowserRouter> 
        <Switch>
            <Route path="/ItemDetailConainer">
                <ItemListContainer/>
            </Route>
            <Route path="/">
                <ItemDetailContainer/>
                
            </Route>
        </Switch>
    </BrowserRouter>
}







