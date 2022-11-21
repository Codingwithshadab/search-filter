import React from "react";
import { useSelector, useDispatch} from "react-redux"
import { incrementeVal } from "../store/counterSlice";
import "./Counter.css";
function Counter() {
    const store = useSelector((state)=>{
        return state   
    });
    const dispatch = useDispatch();
    const handleInc = () =>{
        dispatch(incrementeVal())
    }
  return (
    <>
      <div className="container mt-3">
        <h5>Getting Started with Redux <code>(Document)</code></h5>
        <hr />
        <h5>Counter Value: <span className="score">{store.value}</span></h5>
        <button onClick={handleInc} className="btn btn-success">Increament</button>
      </div>
    </>
  );
}

export default Counter;
