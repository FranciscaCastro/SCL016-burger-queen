import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

export default (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const firebase = useFirebaseApp();
    const user = useUser
    const submit = () =>{
        firebase.auth.createUserWithEmailAndPassword(email, password);
    }
    return(
        <div>
             { user.email }
            <div>
                <input type="email" id="mail" placeholder="Correo electrónico" onChange={ (e=> setEmail(e.target.value)) } />
                <input type="password" id="pass" placeholder="Contraseña" onChange={ (e=> setPassword(e.target.value)) } />
                <button onClick={submit}>Ingresar</button>   
            </div>
        </div>
    )
}