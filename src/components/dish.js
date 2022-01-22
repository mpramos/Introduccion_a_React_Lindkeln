import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
class Flag extends Component {
    render() {
        return (
            <div>
                <h1>Bandera</h1>
                <h2>Bandera</h2>
        

            </div>
        )
    }
} 
class Ingredient extends Component {
    render() {
        return (
            <> 
               <h4>Ingredient1</h4> 
               <h4>Ingredient2</h4> 
               
           </>

       )
      }
} 

class Dish extends Component {
    ingredientes = ["tortillas","carne","cebolla"]
    
    countIngredients(){
        return this.ingredientes.length;
    }
    render() {
        return (
            <div className="dish">
                <h1>{ this.props.name }</h1>
                <h3>{ this.countIngredients()}</h3>
                <ul>
                    {this.ingredientes.map(ingredient=><li>
                        {ingredient}
                    </li>)}
                </ul>
                <Button 
                variant="contained" color="secondary">Elegir</Button>
            </div>
        )
    }
} 

export default Dish;
export  {Flag};