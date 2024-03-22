import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const Navbar = () => {
  const { counter, reset } = useContext(ShopContext);

  const clickReset = () => reset();

  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-content-logo" onClick={clickReset}>
            <h2 className="margin-9">Hooops</h2>
          </div>
          <div className="header-content-counter">
            <h4 className="margin-9">{counter} Element</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
