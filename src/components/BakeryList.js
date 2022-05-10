import product from "../products";
import BakeryItem from "./BakeryItem";
const BakeryList = () => {
  return (
    <div>
      <BakeryItem
        id={product[0].id}
        name={product[0].name}
        price={product[0].price}
        image={product[0].image}
      />
      <BakeryItem
        id={product[1].id}
        name={product[1].name}
        price={product[1].price}
        image={product[1].image}
      />
      <BakeryItem
        id={product[2].id}
        name={product[2].name}
        price={product[2].price}
        image={product[2].image}
      />
    </div>
  );
};

export default BakeryList;
