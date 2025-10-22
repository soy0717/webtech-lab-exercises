import './Products.css';

// Fruits and vegetables data
const FRUITS = [
  {name: 'Apple', price: 1, highlighted: false},
  {name: 'Dragonfruit', price: 1, highlighted: false},
  {name: 'Passionfruit', price: 2, highlighted: true},
];

const VEGETABLES = [
  {name: 'Spinach', price: 2, highlighted: false},
  {name: 'Pumpkin', price: 4, highlighted: true},
  {name: 'Peas', price: 1, highlighted: false},
];

// ProductRow child component
function ProductRow(props) {
  const style = props.isHighlighted ? {color: 'red'} : {}; // to highlight out of stock in red
  return (
    <div className="product-row">
      <span style={style}>{props.name}</span>
      ${props.price}
    </div>
  );
}

// ProductCategory child component
function ProductCategory(props) {
  return (
    <div className="product-category">
      <h3>{props.title}</h3>
      {props.items.map(product => 
        (
          <ProductRow
            key={product.name}
            name={product.name}
            price={product.price}
            isHighlighted={product.highlighted}
          />)
      )}
    </div>
  );
}

// Search bar
function SearchAndFilterBar() {
  return (
    <form className="search-bar">
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox"/>
        <label> Only show products in stock</label>
      </p>
    </form>
  );
}

// Parent component
function ProductsPage() {
  return (
    <div className="product-table">
      <SearchAndFilterBar />
      <div className="header">
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      <ProductCategory title="Fruits" items={FRUITS} />
      <ProductCategory title="Vegetables" items={VEGETABLES} />
    </div>
  );
}

export default ProductsPage;
