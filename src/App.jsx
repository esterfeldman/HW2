import './App.css';
import CCMyKitchen from './Components/CCMyKitchen';
import Nav from './Elements/Navbar';

function App() {
  return (
    <div className="App">
      {Nav}
      <h1>Recipes</h1>
      <h2>Recipes made:</h2>
      <CCMyKitchen/>
      
    </div>
  );
}

export default App;
