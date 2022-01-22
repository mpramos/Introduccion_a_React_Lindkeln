import React, {Component} from 'react';

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
               <h1>Ingredient1</h1> 
               <h1>Ingredient2</h1> 
           </>

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