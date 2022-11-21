import React from "react";

function List(props) {
  const arr = props.arr;
  const removeItem = props.removeItem;
  return (
    <>
      <div className="container mt-3">
        <div className="listSec box">
          <h5>Remove Items</h5>
          <ul className="list-group">
            {arr.map((item, i) => {
              return (
                <li className="list-group-item" key={i} onClick={()=>{removeItem(i)}}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default List;
