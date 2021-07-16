import firebase from 'firebase/app';
import '@firebase/firestore';
import '@firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyBdpinfgHDW7FgjRHDa-SPFGXUvyzyzFHU",
  authDomain: "shoes-garcia.firebaseapp.com",
  projectId: "shoes-garcia",
  storageBucket: "shoes-garcia.appspot.com",
  messagingSenderId: "473793031347",
  appId: "1:473793031347:web:f77bdb2b9977a9268a14c6"
};

const fb =  firebase.initializeApp(firebaseConfig);


export const getStorageRef = () => {
  var storage = fb.storage();

  return storage.ref('shoes-garcia');
}

// export const updateStock = (newOrder) => {
//   for (let index = 0; index < newOrder.items.length; index++) {
//     const id = newOrder.items[index].item.id
//     const quantity = newOrder.items[index].quantity
    
//     const item = dataBase.collection("items").doc(id);

//     item.get().then((doc) => {
//         if (doc.exists) {
//             const item_stock = doc.data().stock;
//             item.update({stock: item_stock - quantity});
//         } else {
//             console.log("Document not exist!");
//         }
//     }).catch(function(error) {
//         console.log("Error get document:", error);
//     });
//   }
// }



// export const loadItemsListData = (itemCollection,setItems,marca) => {
//     if(marca !== undefined){
//       var itemToRender = itemCollection.where("marca", "==", marca).limit(20);
//     }else{
//         var itemToRender = itemCollection;
//     }


//   itemToRender.get().then((querySnapshot) => {
//       if(querySnapshot === 0){
//           console.log("no results");
//       }

//       const myItems = querySnapshot.docs.map(doc => {
//           return {...doc.data(),id:doc.id}
//       })

//       setItems(myItems);

//   }).catch(err => {
//       console.log("Ocurrio un error", err);
//   })

// }


export const dataBase = fb.firestore();


