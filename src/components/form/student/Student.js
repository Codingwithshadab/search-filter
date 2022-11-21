import React, { useState } from "react";
import "./Student.css"
function Student() {
  const obj = {
    name: "",
    mail: "",
    pass: "",
    gender: "",
    skills: [],
    comments: "",
  };
  const [studentData, setStudentData] = useState(obj);
  const { name, mail, pass, gender, skills, comments } = studentData;
  const handleInput = (e) => {
    const val = e.target.value;
    const inputName = e.target.name;
    const cloneData = { ...studentData };
    cloneData[inputName] = val;
    setStudentData(cloneData);
  };

  const onClickSkill = (str) =>{
    const form = {...studentData}
    form.skills.push(str)
    setStudentData(form);

  }
  const handleSubmit = () => {
    console.log(studentData);
  };
  return (
    <>
      <div className="formSec">
        <div className="box">
          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={name}
                name="name"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="mail"
                className="form-control"
                placeholder="Enter Mail"
                value={mail}
                name="mail"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={pass}
                name="pass"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Gender
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleInput}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleInput}
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Female
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Skills
              </label>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="HTML"
                  name="val1"
                  onClick={()=>{onClickSkill("HTML")}}
                />
                <label>HTML</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="CSS"
                  name="val2"
                  onClick={()=>{onClickSkill("CSS")}}
                />
                <label>CSS</label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="JAVASCRIPT"
                  name="val3"
                  onClick={()=>{onClickSkill("Javascript")}}
                />
                <label>JAVASCRIPT</label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Comments
              </label>

              <textarea
                className="form-control"
                value={comments}
                name="comments"
                placeholder="Please Comment Here"
                onChange={handleInput}
              ></textarea>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
              disabled={!name || !mail || !pass}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
