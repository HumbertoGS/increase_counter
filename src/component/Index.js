import { Suspense } from "react";

import Catalogo from "./Catalogo";
import Navbar from "./Navbar";

const Loading = () => <h2>🌀 Loading...</h2>;

const Index = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Catalogo />
      </Suspense>
    </>
  );
};

export default Index;
