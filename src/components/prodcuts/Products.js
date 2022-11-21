import React, { useState } from "react";
import "./Products.css";
import {BsChevronRight} from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Products() {
  const [toggleSate, setToggleState] = useState(false)
  const handleClick = (str) =>{
    const obj = {}
    obj.name = str;
    console.log(obj);
    setToggleState(!toggleSate)
  }
  let toggleClass = toggleSate ? "reject" : "";
  return (
    <>
      <div className="products box">
        <ul className="list-group"> 
          <li className={`list-group-item ${toggleClass}`} onClick={()=>{handleClick("A")}}>A - first item <BsChevronRight /></li>
          <li className={`list-group-item ${toggleClass}`} onClick={()=>{handleClick("B")}}>B - second item <BsChevronRight /></li>
          <li className={`list-group-item ${toggleClass}`} onClick={()=>{handleClick("C")}}>C - third item <BsChevronRight /></li>
          <li className={`list-group-item ${toggleClass}`} onClick={()=>{handleClick("D")}}>D - fourth one <BsChevronRight /></li>
        </ul>
      </div>
    </>
  );
}

export default Products;
