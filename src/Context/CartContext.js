import React, {useState, createContext} from 'react';
import {dataBase} from '../Firebase/firebase';

export const ModeContext = createContext();

export const CartContext = (props) => {
    const [items,setItem] = useState([]);
    const [itemTrashId,setItemTrashId] = useState(undefined);
    const [idCompra,setIdCompra] = useState(undefined);

    const saveBuy = (buyer) => {
        const order = {
            items: items,
            buyer: buyer,
            date: new Date().toLocaleString() + "",
            price: getTotalPrice(),
        }
        dataBase.collection("orders").add(order).then((docRef) => {
            setIdCompra(docRef.id);
            for (let index = 0; index < order.items.length; index++) {
                const id = order.items[index].item.id
                const quantity = order.items[index].quantity
                
                const item = dataBase.collection("items").doc(id);
            
                item.get().then((doc) => {
                    if (doc.exists) {
                        const item_stock = doc.data().stock;
                        item.update({stock: item_stock - quantity});
                    }
                })
              }
        })
    }

    const getTotalPrice = () =>{
        const totalPrice = items.reduce(function(accumulator, currentValue) {
            return accumulator + (currentValue.item.precio * currentValue.quantity) ;
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
        const quantity = items.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue.quantity ;
          },0);

        return quantity;
    }


    const getIndex = (id) =>{
        return items.findIndex(item => item.id === id);
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

    return <ModeContext.Provider value={{addItem, getItems, clear, isInCart, getQuantity, removeItem, getTotalPrice, saveBuy,setItemTrashId, itemTrashId, idCompra}}>
        {props.children}
    </ModeContext.Provider>
}


