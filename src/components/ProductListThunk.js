import React, { Component } from "react";
import { getAllProducts } from "../stateManagement/actions/ProductThunkAction";
import { connect } from "react-redux";

class ProductListThunk extends Component {
  componentDidMount() {
    this.props.getAll();
  }
  render() {
    const { isLoading, message, products } = this.props;
    if (isLoading) {
      return <h3>Loading Data From Server ....</h3>;
    } else if (message) {
      return <h3>message</h3>;
    } else {
      return (
        <div>
          <h3>Product List With Thunk</h3>
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
              {products
                ? products.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.productId}</td>
                        <td>{item.productName}</td>
                        <td>{item.unitPrice}</td>
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
}

const mapStateToProps = (state) => {
  return {
    products: state.productThunkState.items,
    isLoading: state.productThunkState.isLoading,
    message: state.productThunkState.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: (id) => getAllProducts(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListThunk);
