import Image from "next/image";
import wp from "/public/wp.jpg";
import "./img.css";

//
//

function IMG() {
  return (
    <>
      {/* <div className="img-container">
        <img src={wp.src} alt="wp" />
      </div> */}

      {/* <div className="img-container-2">
        <Image src={wp} alt="wp" placeholder="blur" />
      </div> */}

      {/* <div className="img-container-3">
        <Image
          src="https://images.unsplash.com/photo-1482192505345-5655af888cc4"
          alt="wp"
          fill
        />
      </div> */}

      {/* <div className="img-container-4">
        <Image src={wp} alt="wp" sizes="100vw" placeholder="blur" />
      </div> */}

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quas
        eveniet illo sequi minus vel dolor labore quidem inventore. Autem ipsa,
        eligendi quas voluptatum aliquid voluptate, facilis, laboriosam deserunt
        quos doloribus repellat obcaecati voluptates mollitia error eum sunt vel
        libero. Porro, harum consectetur voluptatem architecto aut recusandae
        animi? Laudantium, distinctio!
      </p>
    </>
  );
}

export default IMG;
