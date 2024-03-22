import { useContext, useMemo } from "react";
import { ShopContext } from "../context/shopContext";

const Catalogo = ({ products, optionSelected }) => {
  const { increment } = useContext(ShopContext);

  const incrementCounter = () => increment();

  const filterTodos = (products, optionSelected) => {
    if (optionSelected === "todos") return products ?? [];
    return products?.filter((item) => item?.category === optionSelected);
  };

  const filterProducts = useMemo(
    () => filterTodos(products, optionSelected),
    [products, optionSelected]
  );

  return (
    <>
      <div className="content">
        {filterProducts &&
          filterProducts?.map((item) => {
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
