import { CartProvider } from './providers/CartContext';
import { ProductProvider } from './providers/ProductsContext';
import { UserProvider } from './providers/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <>
    <GlobalStyles />
    <CartProvider>
      <ProductProvider>
        <UserProvider>
          <Router />
        </UserProvider>
      </ProductProvider>
    </CartProvider>
  </>
);

export default App;
