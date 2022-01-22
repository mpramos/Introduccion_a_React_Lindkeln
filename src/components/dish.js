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
               <h4>Ingredient1</h4> 
               <h4>Ingredient2</h4> 
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