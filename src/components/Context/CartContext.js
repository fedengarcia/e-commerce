import React, {useState, createContext,useEffect} from 'react';

const ModeContext = createContext();

export default function CartContext (props) {
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

    return <ModeContext.Provider value={{addItem,removeItem,clear,isInCart}}>
        {props.children}
    </ModeContext.Provider>
}