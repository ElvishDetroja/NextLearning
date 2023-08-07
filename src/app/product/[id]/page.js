import axios from "axios";

async function ProductID({ params }) {
  const id = params.id;

  const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
  console.log(data);

  return (
    <div>
      <p>ProductID {id}</p>
      <p>
        title : {data.title} - price : {data.price}
      </p>
    </div>
  );
}

export default ProductID;