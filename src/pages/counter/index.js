import React from "react";
import Counter from "../../components/redux/counter/Counter";
import {Provider} from "react-redux";
import { store } from "../../components/redux/store/Store";
function CounterPage() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default CounterPage;
