import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./component/Index";

import { ShopProvider } from "./context/shopContext";

import "./styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <ShopProvider>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </ShopProvider>
    </BrowserRouter>
  );
}

export default App;
