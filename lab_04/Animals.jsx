import './Animals.css';

// Child component
function Animal(props) {
  return (
    <div className="animals-card">
      <h2>{props.name}</h2>
      <h3>{props.scientificName}</h3>
      <h4>{props.weight}</h4>
      <p>{props.diet}</p>
    </div>
  );
}

// Parent component
function AnimalsPage() {
  return (
    <div className="animals-page">
      <h1>Animals</h1>
      <div className="animals-list">
        <Animal
          name="Lion"
          scientificName="Panthero leo"
          weight="140kg"
          diet="meat"
        />
        <Animal
          name="Gorilla"
          scientificName="Gorilla beringei"
          weight="205kg"
          diet="plants, insects"
        />
        <Animal
          name="Zebra"
          scientificName="Equus quagga"
          weight="322kg"
          diet="plants"
        />
      </div>
    </div>
  );
}

export default AnimalsPage;
