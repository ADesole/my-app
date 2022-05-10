const BakeryItem = (prop) => {
  return (
    <div>
      <img
        src={prop.image}
        alt={prop.id}
        style={{
          width: "300px",
          minHeight: "200px",
        }}
      ></img>
      <h1>{prop.name}</h1>
      <h2>{prop.price} KD</h2>
    </div>
  );
};

export default BakeryItem;
