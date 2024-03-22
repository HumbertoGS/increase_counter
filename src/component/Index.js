import { Suspense, useState, useEffect } from "react";

import Catalogo from "./Catalogo";
import Navbar from "./Navbar";
import Filter from "./Filter";

const Loading = () => <h2>🌀 Loading...</h2>;

const Index = () => {
  const [products, setProducts] = useState(null);
  const [optionSelected, setOptionSelected] = useState("todos");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const optionSelect = (selected) => setOptionSelected(selected);

  return (
    <>
      <Navbar />
      <Filter optionSelect={optionSelect} />
      <Suspense fallback={<Loading />}>
        <Catalogo products={products} optionSelected={optionSelected} />
      </Suspense>
    </>
  );
};

export default Index;
