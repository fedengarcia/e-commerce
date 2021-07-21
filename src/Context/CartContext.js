import React, {useState, createContext} from 'react';
// import firebase from 'firebase/app';
// import '@firebase/firestore';


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
        var totalPrice = 0
        for (var index = 0; index < items.length; index++) {
            totalPrice = totalPrice + (items[index]['item']['precio'] * items[index]['quantity']);
        }
        return totalPrice;
    }


    const isInCart = (id) =>{
        for(var i = 0; i < items.length; i++) {
            if(items[i]["item"]["id"] === id) {
                return true;
            }
        }
        return false; 
    }

    const getQuantity = () => {
        var quantity = 0;
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

    // Spread operator, wrapper function (recommended)
    // setItem(items => [...items,item])

    const addItem = (item) => {
        var result = getIndex(item.item.id);
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


