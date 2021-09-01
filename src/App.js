import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Footer from './components/Footer';
import {AppProvider} from './context';


function App() {

  return (
    <div className="App">
      <AppProvider>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Home /> 
        </Route> 
        <Route  path="/about">
          <About /> 
        </Route> 
        <Route  path="/product/:id">
          <SingleProduct /> 
        </Route> 
        <Route  path="/products">
          <Products /> 
        </Route> 
        <Route  path="/cart">
          <Cart /> 
        </Route> 
        <Footer />
      </Router>
      </AppProvider>
    </div>
  );
}

export default App;
