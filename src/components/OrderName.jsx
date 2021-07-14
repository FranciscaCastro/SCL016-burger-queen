import React, { useState } from 'react';
import 'firebase/firestore';
import { useFirebaseApp } from 'reactfire';
import { NavLink } from 'react-router-dom'

export default (props) => {
    const [ name, setName ] = useState('');
    const firebase = useFirebaseApp();
    const createOrder = () => {
        firebase.firestore().collection("orders").add({
            client: name,
            products: [],
            details: "",
            totalPrice: 0,
            tip: 0
          })
        .then(()=>{
            alert("Order created!");
            })
        .catch (()=>{
            alert("Failed to send");
            })
        }
    return(
     <div className="container">
         <input className="inputTable" type="name" id="orderName" placeholder="Nombre Cliente/Mesa" onChange={ (e=> setName(e.target.value)) } />
         <NavLink onClick={createOrder} to="/Waiter">Crear</NavLink>
     </div>
   )
}
