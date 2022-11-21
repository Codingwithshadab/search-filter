import React, { useState } from "react";
import Movies from "../../components/movies/Movies";

function MoviesPage() {
  const moviesData = [
    {
      id: "1",
      title: "A",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "2",
      title: "B",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "3",
      title: "C",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "4",
      title: "D",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "5",
      title: "E",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "6",
      title: "F",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "7",
      title: "G",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "8",
      title: "A",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    }
  ];
  const [movies, setMovies] = useState(moviesData)
  const removeItem = (index) => {
    const cloneMovies = [...movies] 
    cloneMovies.splice(index, 1);
    setMovies(cloneMovies);
    console.log(cloneMovies);
  };
  const selectItem = (obj) =>{
    const selectObject = [];
    selectObject.push(obj);
    console.log(selectObject);
  }
  return (
    <>
      <Movies movies={movies} removeItem={removeItem} selectItem={selectItem} />
    </>
  );
}

export default MoviesPage;
