import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import WithSubnavigation from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <WithSubnavigation/>
      <Home/>
    </div>
  );
}

export default App;
