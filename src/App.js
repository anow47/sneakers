import './App.css';
import Navigation from './components/Navigation';
import Cart from './components/Cart';
import Products from './components/Products';
import { ShopContextProvider } from './context/ShopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <header>
          <Navigation />
          <Cart />
        </header>
        <main className="App-main">
          <Products />
        </main>
      </ShopContextProvider>
    </div>
  );
}

export default App;
