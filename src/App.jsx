import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Navbar from './components/Navbar';
import ShopContextProvider from './context/ShopContextProvider';

const App = () => {
  return (
    <div className="app">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
};
export default App;
