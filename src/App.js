import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar.jsx";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola soy greeting"/>
    </div>
  );
}

export default App;
