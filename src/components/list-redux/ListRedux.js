import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./listSlice";

function ListRedux() {
  const store = useSelector((state) => {
    return state.listSlice;
  });
  const dispatch = useDispatch()
  const handleRemove = (index) => {
    dispatch(removeItem(index))
    // console.log(index);
  };
  return (
    <>
      <div className="container mt-3">
        <div className="listInfo">
          <ul className="list-group">
            {store.list.map((item) => {
              return (
                <li key={item.id} className="list-group-item">
                  {item.title}
                  <button 
                    type="button"
                    className="removeItem btn btn-danger"
                    onClick={() => {
                      handleRemove(item.id);
                    }} > X </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListRedux;
