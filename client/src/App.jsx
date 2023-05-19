import './App.css';
import NavBarHome from './components/Navbar';
import Tienda from './views/Tienda';
import Registro from './views/Registro';
import Home from './views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBarHome />
      <Registro />
      {/* <Home /> */}
    </div>
  );
}

export default App;
