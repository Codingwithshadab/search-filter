import React, { useState } from "react";
import "./Form.css"
function FormApp() {
  const obj = {
    name: "John",
    age: "50",
  };
  const [data, setData] = useState(obj);
  const {name, age} = data;
  // const [empty, setEmpty] = useState("");
  const handleInput = (e) => {
    const val = e.target.value;
    const inputName = e.target.name;
    const updatedForm = { ...data };
    updatedForm[inputName] = val;
    setData(updatedForm);

    // if (val == "") {
    //     setEmpty(true);
    // }
    // else{
    //     setEmpty(false);
    // }
  };
  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <>
      <div className="formSec">
        <div className="box">
          <div className="form-group">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={name}
                name="name"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={age}
                name="age"
                onChange={handleInput}
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
              disabled={!name || !age}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormApp;
