import React from "react";
import { connect } from "react-redux";
import { add } from "../stateManagement/actions/ProductAction";
function ProductDetails(props) {
  function Save(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    let obj = {
      id: form.get("id"),
      productName: form.get("productName"),
      price: form.get("price"),
    };
    props.addProduct(obj);
    event.target.reset();
  }
  return (
    <>
      <h3>Add new Product</h3>
      <form onSubmit={(e) => Save(e)}>
        <div className="form-group p-0">
          <label>Product Id:</label>
          <input type="number" className="form-control" name="id" />
        </div>
        <div className="form-group">
          <label>Product Name:</label>
          <input type="test" className="form-control" name="productName" />
        </div>
        <div className="form-group">
          <label>Product Price:</label>
          <input type="number" className="form-control" name="price" />
        </div>
        <button type="submit" className="btn ml-10 btn-primary ">
          Save
        </button>
      </form>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (item) => dispatch(add(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);
