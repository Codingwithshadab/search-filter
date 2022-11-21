import React from 'react';
import "./DataNotFound.css";
function DataNotFound() {
  return (
    <>
      <div className="notFound">
        <h3>No result found</h3>
        <p>We couldn't what you searched for.</p>
        <a href="#">Try search again</a>
      </div>
    </>
  )
}

export default DataNotFound