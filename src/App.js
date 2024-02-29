import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card/Card.jsx";
import AddCard from "./Components/AddCard/index.jsx";

function App() {
  return (
    <div className="App">
      <AddCard />
      <div className="cards">
        <Card name={"Magnit"} />
        <Card name={"Auto"} />
        <Card name={"Samokat"} />
        <Card name={"Apteca"} />
        <Card name={"Auchan"} />
      </div>
    </div>
  );
}

export default App;
