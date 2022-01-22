import './styles/App.css';
import  Header  from './components/header';
import  Dish, {Flag}  from './components/dish';

function App() {
  return (
    <div className="App">
      <Header />
      <Dish />
      <Flag />
    </div>
    
  );
}

export default App;
