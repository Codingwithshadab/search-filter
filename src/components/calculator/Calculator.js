import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Calculator.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementVal,
  incrementVal,
  updatedVal,
} from "./store/calculatorSlice";
function Calculator() {
  const store = useSelector((state) => {
    return state;
  });
  const [formVal, setFormVal] = useState({
    inc: "",
    dec: "",
  });
  const dispatch = useDispatch();
  const incHandler = () => {
    dispatch(incrementVal(formVal.inc));
  };
  const decHandler = () => {
    dispatch(decrementVal(formVal.dec));
  };
  const generate = () => {
    const obj = {
      incrementVal : +formVal.inc,
      decrementVal: +formVal.dec
    }
    dispatch(updatedVal(obj));
  };
  // get input value
  const handleChange = (event) => {
    const cloneData = { ...formVal };
    const val = event.target.value;
    const inputName = event.target.name;
    cloneData[inputName] = +val;
    setFormVal(cloneData);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="calculator">
          <Form>
            <div className="inputCard mb-3">
              <Form.Group className="number" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  placeholder="Add"
                  name="inc"
                  value={formVal.inc}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="success" onClick={incHandler}>
                {" "}
                Increament{" "}
              </Button>
            </div>
            <div className="inputCard">
              <Form.Group className="number" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  placeholder="Delete"
                  name="dec"
                  value={formVal.dec}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="danger" onClick={decHandler}>
                Decrement
              </Button>
            </div>
          </Form>

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="m-0">Result - {store.value}</h5>
            </div>
          </div>
          <div className="mt-3">
            <Button variant="primary" onClick={generate}>
              Generated
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
