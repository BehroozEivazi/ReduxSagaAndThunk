import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategoryRequested } from "../stateManagementSaga/actions/CategoryActions";
class CategoryList extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    let { message, categories, isLoading } = this.props;
    return (
      <div>
        <h3>Category List Redux Saga</h3>
        {isLoading ? <div>Loading Data</div> : null}
        {message ? <div>{"Error message :" + message}</div> : null}
        {categories?.map((item, i) => (
          <a key={i} className="btn btn-outline-secondary m-1">
            {item.categoryName}
          </a>
        ))}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    message: state.categoryState.message,
    isLoading: state.categoryState.isLoading,
    categories: state.categoryState.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategoryRequested()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
