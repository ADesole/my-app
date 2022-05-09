const product = [
  {
    id: 1,
    name: "Toast",
    price: 1.5,
    image:
      "https://images.getrecipekit.com/20210919052613-breakfast-toast-topper-1030x687.jpg?width=650&quality=90&",
  },
  {
    id: 2,
    name: "baquette",
    price: 3,
    image:
      "https://thumbs.dreamstime.com/b/hand-holding-french-baquette-bread-fresh-white-background-53713643.jpg",
  },
  {
    id: 3,
    name: "Hamburger Bun",
    price: 1,
    image:
      "https://www.rockrecipes.com/wp-content/uploads/2021/06/The-Best-Hamburger-Buns-Recipe-close-up-photo-of-one-bun-split-in-half-horisontally.jpg",
  },
];
const productList = product.map((prod) => {
  return (
    <div>
      <img
        src={prod.image}
        alt="Bakery product"
        style={{
          width: "300px",
          minHeight: "200px",
        }}
      ></img>
      <h1>{prod.name}</h1>
      <h2>{prod.price} KD</h2>
    </div>
  );
});

export default productList;
