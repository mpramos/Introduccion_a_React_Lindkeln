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
    render() {
        return (
            <div>
                <h1>Ingredientes</h1>
            </div>
        )
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