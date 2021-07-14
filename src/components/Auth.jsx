import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { NavLink } from 'react-router-dom';
import '../components.css';

export default (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const firebase = useFirebaseApp();
    const submit = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Sesión iniciada!");
        })
          .catch((error) => {
          alert('Correo electrónico o contraseña inválido');
        });
    }
    return(
        <div className="container">
            <img srcSet="../images/logo.png" className="logo" width="400px" rel="preload" />
            <input type="email" id="mail" placeholder="Correo electrónico" onChange={ (e=> setEmail(e.target.value)) } />
            <input type="password" id="pass" placeholder="Contraseña" onChange={ (e=> setPassword(e.target.value)) } />
            <NavLink onClick={submit} to="/OrderName">Ingresar</NavLink>
        </div>
    )
}