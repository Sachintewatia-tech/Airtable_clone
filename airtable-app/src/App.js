import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import WithSubnavigation from './Components/Navbar';
import Footer from './Components/footer';
import Signup from './Components/Signup';
import AllRoute from './Components/AllRoutes';
function App() {
  return (
    <div className="App">
       <WithSubnavigation/>
      {/*<Home/>
      <Footer/>
      <Signup/> */}
      <AllRoute/>
    </div>
  );
}

export default App;
