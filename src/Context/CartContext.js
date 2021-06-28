import React, {useState, createContext,useEffect} from 'react';

export const ModeContext = createContext();

export const CartContext = (props) => {
    const [items,setItems] = useState([]);

    useEffect(() => {
       console.log('Se actualizo el context', items);
    });

    const addItem = (item,quantity) => {
        setItems(items.push(
            {
                "item": item,
                "quantity": quantity
            }
        ));
    }

    const removeItem = (id) => {
        delete items[id]
    }

    const clear = () => {
        setItems([]);
    }

    const isInCart = (id) => {
        if(items.length <= id){
            return true;
        }else{
            return false;
        }
    }


    const getItems = () => {
        return items;
    }

    return <ModeContext.Provider value={{addItem,removeItem,clear,isInCart}}>
        {props.children}
    </ModeContext.Provider>
}


