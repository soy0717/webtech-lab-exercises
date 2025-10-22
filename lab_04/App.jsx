// App.jsx file to import all 3 page components
import AnimalsPage from './Animals';
import ProductsPage from './Products';
import ListsPage from './Lists';

// Root component
function App() {
  return (
    <>
        <ProductsPage />
        <ListsPage />
        <AnimalsPage />
    </>
  );
}

export default App;
