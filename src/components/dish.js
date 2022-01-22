import React, {Component} from 'react';

class Flag extends Component {
    render() {
        return (
            <div>
                <h1>Bandera</h1>
            </div>
        )
    }
} 
class Ingredient extends Component {
    // usando codigo nativo de react
    // h4 nombre de la etiqueta 
    // {} si se tiene alguna propiedad para trabajar
    // 'ingrediente' contenido de la etiqueta 
   render() {
       return React.createElement('h4',{},'Ingredientes')
   }
} 

class Dish extends Component {
    render() {
        return (
            <div>
                <h1>Platillo</h1>
                <Ingredient />
            </div>
        )
    }
} 

export default Dish;
export  {Flag};