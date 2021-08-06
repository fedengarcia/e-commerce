import { useState, useEffect } from 'react';
import {dataBase} from '../../Firebase/firebase';


function useSaveFirebaseData (newOrder) {
    const [idCompra,setIdCompra] = useState(undefined);

  useEffect(() => {
    dataBase.collection("orders").add(newOrder).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setIdCompra(docRef.id);
        for (let index = 0; index < newOrder.items.length; index++) {
            const id = newOrder.items[index].item.id
            const quantity = newOrder.items[index].quantity
            
            const item = dataBase.collection("items").doc(id);
        
            item.get().then((doc) => {
                if (doc.exists) {
                    const item_stock = doc.data().stock;
                    item.update({stock: item_stock - quantity});
                } else {
                    console.log("Document not exist!");
                }
            }).catch(function(error) {
                console.log("Error get document:", error);
            });
          }
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  });

  return idCompra;
}

export default useSaveFirebaseData;

