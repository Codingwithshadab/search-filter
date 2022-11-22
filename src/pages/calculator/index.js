import React from "react";
import Calculator from "../../components/calculator/Calculator";
import {Provider} from "react-redux";
import {store} from "../../components/calculator/store/Store";
import ListRedux from "../../components/list-redux/ListRedux";
function CalculatorPage() {
  return (
    <>
      <Provider store={store}>
        <Calculator />
        <ListRedux />
      </Provider>
    </>
  );
}

export default CalculatorPage;
