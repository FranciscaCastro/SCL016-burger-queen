
import React, { Component } from 'react';
import menu from '../data/Menu.js';
import Header from './Header.jsx'
import 'firebase/firestore';
import { useFirebaseApp } from 'reactfire';

export default (props) => {
        const breakfastMenu = menu.Desayuno;
        const lunchMenu = menu.Almuerzo;
              
        return (
        <div>
            <Header></Header>
            <div className="content">
            <div className="items">
            <div id="menuSelect" className="menuSelect">
                    <button className="btnSelect">DESAYUNO</button>
                    <button className="btnSelect">ALMUERZO CENA</button>
            </div>                
                    <div className="breakfastItems">
                        <div id="breakfastDrinks" className="breakfastDrinks">
                            <p>Para beber</p>
                            <button className="btnMenu">{breakfastMenu[0].name}</button>
                            <button className="btnMenu">{breakfastMenu[1].name}</button>
                            <button className="btnMenu">{breakfastMenu[2].name}</button>
                            <button className="btnMenu">{breakfastMenu[3].name}</button>
                            <button className="btnMenu">{breakfastMenu[4].name}</button>
                        </div>
                        <div id="breakfastDishes" className="breakfastDrinks">
                            <p>Para comer</p>
                            <button className="btnMenu">{breakfastMenu[5].name}</button>
                            <button className="btnMenu">{breakfastMenu[6].name}</button>
                        </div>
                    <div className="lunchItems">    
                    <div id="lunchDrinks" className="lunchDrinks">
                            <p>Para beber</p>
                            <button className="btnMenu">{breakfastMenu[0].name}</button>
                            <button className="btnMenu">{lunchMenu[1].name}</button>
                            <button className="btnMenu">{lunchMenu[2].name}</button>
                            <button className="btnMenu">{lunchMenu[3].name}</button>
                            <button className="btnMenu">{lunchMenu[4].name}</button>
                        </div>
                        <div>
                            <p>Para comer</p>
                            <button className="btnMenu">{lunchMenu[5].name}</button>
                            <button className="btnMenu">{lunchMenu[6].name}</button>
                        </div>
                    </div>
                    </div>
                
            </div>
            <div id="priceMenu" className="priceMenu">
                <p id="orderName">Nombre Cliente</p>
            </div>
            </div>
          
            </div>    
        )
    }
// } 

// export default WaiterView;