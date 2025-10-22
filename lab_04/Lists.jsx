import './Lists.css';

// Fruits and vegetables data
const fruitsData = [
  {name: 'apple', quantity: 95},
  {name: 'orange', quantity: 45},
  {name: 'banana', quantity: 105},
  {name: 'coconut', quantity: 159},
  {name: 'pineapple', quantity: 37},
];

const vegetablesData = [
  {name: 'potatoes', quantity: 110},
  {name: 'celery', quantity: 15},
  {name: 'carrots', quantity: 25},
  {name: 'corn', quantity: 63},
  {name: 'broccoli', quantity: 50},
];  

// Child component
function ItemList(props) {
  return (
    <div className="list-box">
      <h2>{props.category}</h2>
      <ul>
        {props.items.map(item => 
          (<li>{item.name}: {item.quantity}</li>))
        }
      </ul>
    </div>
  );
}

// Parent component
function ListsPage() {
  return (
    <div className="lists-page">
      <h1>RENDER LISTS</h1>
      <div className="lists-container">
        <ItemList category="Fruits" items={fruitsData} />
        <ItemList category="Vegetables" items={vegetablesData} />
      </div>
    </div>
  );
}

export default ListsPage;
