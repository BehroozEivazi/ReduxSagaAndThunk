import React from "react";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import ProductListThunk from "./components/ProductListThunk";
import CategoryList from "./sagaComponents/CategoryList";

function App(props) {
  return (
    <div className="container-fluid">
      <h1>First Redux Sample App</h1>
      <hr />
      <div className="row">
        <div className="col">
          <ProductList />
        </div>
        <div className="col">
          <ProductDetails />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ProductListThunk />
        </div>
        <div className="col">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}

export default App;
