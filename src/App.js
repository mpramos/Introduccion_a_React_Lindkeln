import './styles/App.css';
import  Header  from './components/header';
// Con el * importamos todos lo componentes del componente Dish y Escribimos as D porque con esa letra
// podremos llamar al Flag
import  Dish, * as D from './components/dish';

function App() {
  return (
    <div className="App">
      <Header />
      <Dish />
      <D.Flag /> 
    </div>
    
  );
}

export default App;
