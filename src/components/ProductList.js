import React, { Component } from "react";
import { getAll, remove } from "../stateManagement/actions/ProductAction";
import { connect, useDispatch } from "react-redux";
class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>Product List</h3>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props && this.props.products
              ? this.props.products.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.productName}</td>
                      <td>{item.price}</td>
                      <td
                        onClick={() => {
                          this.props.removeProduct(item.id);
                        }}
                      >
                        <button className="btn btn-danger btn sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productState.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (id) => dispatch(remove(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
