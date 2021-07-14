import React, { useState } from 'react';
import { useFirebaseApp, useUser } from 'reactfire';

export default (props) => {
    const firebase = useFirebaseApp();
    const user = firebase.auth().currentUser.email
    
    return(
        <header>
            <div className="header">
            <img srcSet="../images/logo.png" className="logo" width="60px" rel="preload" />
            <p>Conectado como: {user}</p>
            </div>
        </header>
    )
}