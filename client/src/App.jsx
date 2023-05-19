import './App.css';
import NavBarHome from './components/Navbar';
import Tienda from './views/Tienda';
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div>
      
          <NavBarHome />
          <Tienda />
          <Home />
          
    </div>
  );
}

export default App;
