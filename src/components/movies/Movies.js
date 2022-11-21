import React, { useState } from "react";
import "./Movies.css";
import { MdCancel } from "react-icons/md";
import DataNotFound from "./data-not-found/DataNotFound";
function Movies(props) {
  const movies = props.movies;
  const removeItem = props.removeItem;
  const selectItem = props.selectItem;
  const [data, setData] = useState("");
  const handler = (event) => {
    setData(event.target.value.toUpperCase());
  };

  const filterData = movies.filter((item) => item.title.includes(data));
  return (
    <>
      <section className="moviesSec">
        <div className="container">
          <div className="moviesInfo  pt-3">
            <div className="search">
              <input
                type="text"
                placeholder="Search Here"
                value={data}
                onChange={handler}
                className="form-control"
              />
              <button className="btn btn-warning" disabled={!data}>
                Search
              </button>
            </div>

            {/* Building Blocks - Components */}
            {/* <DataNotFound /> */}
             

            <div className="moviesItems pt-3 ">
              {filterData.map((item, id) => {
                  return (
                    <div key={item.id} className="card">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                        <div
                          className="cancel"
                          onClick={() => {
                            removeItem(id);
                          }}
                        >
                          <MdCancel />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="selectItem pt-3">
              <button className="btn btn-primary" disabled={!data} onClick={()=> selectItem(filterData)}>
                Selected Item
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Movies;
