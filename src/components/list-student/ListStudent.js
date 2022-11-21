import React from "react";

function ListStudent(props) {
  return (
    <>
      <div className="container mt-3">
        <div className="listSec box">
          <h5>Toggle Active Class</h5>
          <ul className="list-group">
            {props.data.map((item) => {
              return (
                <li className={`list-group-item ${item.isActive && "active" }`} key={item.id} onClick={()=>{props.hadleClick(item.id)}}>
                  {item.title}
                </li>
              );
            })}
          </ul>
          <button className="btn btn-primary mt-3" onClick={props.selectItem}>Select Item</button>
        </div>
      </div>
    </>
  );
}

export default ListStudent;
