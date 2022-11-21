import React, { useState } from "react";
import ListStudent from "../../components/list-student/ListStudent";
import List from "../../components/list/List";
import Products from "../../components/prodcuts/Products";

function ProductsPage() {
  const newArr = [
    {
      id: "1",
      title: "A",
      isActive: true,
    },
    {
      id: "2",
      title: "B",
      isActive: false,
    },
    {
      id: "3",
      title: "C",
      isActive: false,
    },
    {
      id: "4",
      title: "D",
      isActive: false,
    },
  ];
  const [list, setList] = useState(newArr);
  const hadleClick = (index) => {
    const modifiedArr = list.map((item) => {
      if (item.id === index) {
        return { ...item, isActive: !item.isActive };
      } else {
        return item;
      }
    });
    setList(modifiedArr);
  };
  const selectItem = () => {
    console.log(list);
  };

  // List
  const arr = [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }];
  const [data, setData] = useState(arr);
  const removeItem = (index) => {
    const cloneData = [...data];
    cloneData.splice(index, 1);
    setData(cloneData);
  };
  return (
    <>
      <Products />

      <List arr={data} removeItem={removeItem} />
      <ListStudent
        data={list}
        hadleClick={hadleClick}
        selectItem={selectItem}
      />
    </>
  );
}

export default ProductsPage;
