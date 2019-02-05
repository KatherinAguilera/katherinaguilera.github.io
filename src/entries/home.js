// crear los componentes
import React from 'react';
// redenderizar en el navegador
import ReactDOM from 'react-dom';    //o import {render} from 
// Importamos dependencias de React
import HomePage from '../pages/containers/homePage';
import data from '../api.json';

const app = document.getElementById('app');
// Referenciamos un elemento con ID app
// const holaMundo = <h1>Hola Mundo</h1>;
// Insertamos en una constante lo que queremos renderizar
ReactDOM.render(<HomePage data={data} />, app);  //o // render(holaMundo, app)
// Le decimos a ReactDOM (que renderizar , y donde renderizar)


