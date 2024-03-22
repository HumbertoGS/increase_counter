import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/shopContext";

const Catalogo = () => {
  const [products, setProducts] = useState(null);

  const { increment } = useContext(ShopContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const incrementCounter = () => increment();

  return (
    <>
      <div className="content">
        {products &&
          products.map((item) => {
            return (
              <div key={item?.id} className="content-product">
                <div className="content-product-img">
                  <img
                    src={item?.image}
                    height={120}
                    width={100}
                    alt={item?.title}
                  />
                </div>
                <div className="content-product-data">
                  <div className="content-product-data-description">
                    <label className="content-product-data-description-title">
                      {item?.title}
                    </label>
                    <label className="content-product-data-description-price">
                      ${item?.price}
                    </label>
                  </div>

                  <div className="content-product-data-button">
                    <button className="content-product-data-button-more">
                      +
                    </button>
                    <button
                      className="content-product-data-button-add"
                      onClick={incrementCounter}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Catalogo;
