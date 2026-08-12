import "./App.css";

const fruits = [
  {
    name: "Apple",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
    description: "Fresh and juicy red apple",
  },
  {
    name: "Banana",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
    description: "Sweet and healthy banana",
  },
  {
    name: "Strawberry",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
    description: "Fresh red strawberries",
  },
  {
    name: "Orange",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e",
    description: "Juicy and tasty orange",
  },
  {
    name: "Watermelon",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d",
    description: "Cool and refreshing watermelon",
  },
  {
    name: "Mango",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
    description: "Sweet and delicious mango",
  },
  {
    name: "Pineapple",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba",
    description: "Fresh tropical pineapple",
  },
  {
    name: "Grapes",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f",
    description: "Fresh green grapes",
  },
];

function App() {
  return (
    <div className="app">
      <h1>🍓 Fruit Gallery</h1>
      <p className="subtitle">Fresh and delicious fruits</p>

      <div className="gallery">
        {fruits.map((fruit) => (
          <div className="card" key={fruit.name}>
            <img src={fruit.image} alt={fruit.name} />
            <div className="card-content">
              <h2>{fruit.name}</h2>
              <p>{fruit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;