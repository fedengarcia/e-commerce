import React, {useState, createContext} from 'react';

export const ModeContext = createContext();

export const CartContext = (props) => {
    const [items,setItem] = useState([]);
    const [newOrder,setNewOrder] = useState({});
    const [itemTrashId,setItemTrashId] = useState(undefined);


    const saveBuy = (buyer) => {
        const order = {
            items: items,
            buyer: buyer,
            date: new Date().toLocaleString() + "",
            price: getTotalPrice(),
        }
        setNewOrder(order);
    }


    const getTotalPrice = () =>{
        const totalPrice = items.reduce(function(accumulator, currentValue) {
            console.log("ITEM -->", currentValue.item.descripcion)
            console.log("ItemPrecio --->",currentValue.item.precio * currentValue.quantity )
            console.log(accumulator)
            return accumulator + currentValue.item.precio ;
          },0);

        return totalPrice;
    }


    const isInCart = (id) =>{
        const result = items.filter(id => items.id === id);
        if(result === []){
            return false;
        }else{
            return true;
        }
    }

    const getQuantity = () => {
        let quantity = 0;
        for(var i = 0; i < items.length; i++) {
            quantity = items[i]["quantity"] + quantity;
        }
        return quantity; 
    }


    const getIndex = (id) =>{
        for(var i = 0; i < items.length; i++) {
            if(items[i]["item"]["id"] === id) {
                return i;
            }
        }
        return -1; 
    }

    const addItem = (item) => {
        let result = getIndex(item.item.id);
        if(result === -1){
            setItem(items => [...items,item])
        }else{
            const newItems = [...items];
            newItems[result]["quantity"] = newItems[result]["quantity"] + item.quantity;
            setItem(newItems);
        }
        
    }

    const removeItem = (id) => {
        setItem(items.filter(item => item.item.id !== id));
    }

    const clear = () => {
        setItem([])
    }

    const getItems = () => {
        return items;
    }

    return <ModeContext.Provider value={{addItem, getItems, clear, isInCart, getQuantity, removeItem, getTotalPrice, saveBuy, newOrder,setItemTrashId, itemTrashId}}>
        {props.children}
    </ModeContext.Provider>
}


