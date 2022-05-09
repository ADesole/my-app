import "./App.css";
import productList from "./products";

console.log(productList);
function App() {
  return (
    <div className="App">
      <h1>My bakery </h1>
      <p>fun fact bread in spanish is "pan"</p>
      <img
        className="image1"
        src="https://www.bakingbusiness.com/ext/resources/2019/8/08192019/GlobalTrends.jpg?t=1566494557&width=1080"
        alt="Bakery"
      ></img>
      {productList}
    </div>
  );
}

export default App;
