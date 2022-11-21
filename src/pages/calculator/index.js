import React from "react";
import Calculator from "../../components/calculator/Calculator";
import {Provider} from "react-redux";
import {store} from "../../components/calculator/store/Store";
function CalculatorPage() {
  return (
    <>
      <Provider store={store}>
        <Calculator />
      </Provider>
    </>
  );
}

export default CalculatorPage;
