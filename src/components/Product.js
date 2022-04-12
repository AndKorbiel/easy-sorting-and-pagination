function Product({ data }) {
  return (
    <div className="product">
      <h2>{data.title}</h2>
      <p>{data.category}</p>
      <img src={data.image} alt="product" />
      <p>$ {data.price}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
