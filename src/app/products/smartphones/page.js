import axios from "axios";
import Button from "./button";

//
//
//

async function Smartphones() {
  //
  const { data } = await axios.get(
    "https://dummyjson.com/products/category/smartphones"
  );
  console.log(data);
  const products = data.products;

  return (
    <div>
      <h3>Smartphones</h3>
      {products.map((item) => {
        return (
          <>
            <p>
              title : {item.title} - <Button item={item} />
            </p>
          </>
        );
      })}
    </div>
  );
}

export default Smartphones;
