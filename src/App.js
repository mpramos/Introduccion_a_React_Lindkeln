import './styles/App.css';
import './styles/dish.css';
import  Header  from './components/header';
import  Dish, * as D from './components/dish';

function App() {
  let dish ="tacos"
  const dishes =['Tacos','Ceviche','Tucu']
  return (
    <div className="App">
      <Header />
      <Dish name = {dish} qty ='3'/>
      Yo Como { dish}
      <ul>
        {
          dishes.map(dish=><ul>{dish}</ ul>)
        }
      </ul>
    </div>
    
  );
}

export default App;
