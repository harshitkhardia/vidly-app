import { getMovies } from "./Services/fakeMovieService";
import React, { useEffect, useMemo, useState } from "react";
import "./css/fontawesome.min.css";
import ListGroup from "./Components/common/listGroup";
import MoviesTable from "./Components/MoviesTable";
import Pagination from "./Components/common/Pagination";
import _ from 'lodash';


const getfilteredMovieList = (GenreTab,sortColumn) => {
  let temp;
  if (GenreTab === "ALL")
  { temp = getMovies(); }
  else {
     temp=getMovies().filter((c) => c.genre.name === GenreTab);
  }
  return _.orderBy(temp, [sortColumn.path], [sortColumn.order]);
};
export default function App(props) {
  const [GenreTab, setGenreTab] = useState("ALL");
  const [sortColumn, setSortColumn] = useState({
      path: "title",
      order: "asc",
    });
  const [movieList, setMovieList] = useState(getfilteredMovieList(GenreTab,sortColumn));
  let [liked, setliked] = useState(false);
  let [pageNumber, setPageNumber] = useState(1);
  let numberOfItems = 3;
  const pageCount = Math.ceil(movieList.length / numberOfItems);

  useEffect(() => {
    setMovieList(getfilteredMovieList(GenreTab, sortColumn));
  }, [GenreTab, sortColumn]);
  
  const handleDelete = (_id) => {
    //console.log("you are in handle Delete method with", _id);
    const temp = movieList.filter((c) => c._id !== _id);
    setMovieList(temp);
  };
  
  const handleGenreChange = (genre) => {
    setGenreTab(genre)
  }
  const handleLiked = (_id) => {
    setliked(!liked);
  }
  const handlePage = (c) => {
    setPageNumber(c)
  }
  const handleSort = (SortColumn) => {
    console.log("handleSort bell bell!!");
    setSortColumn(SortColumn);
    //setMovieList(getfilteredMovieList(GenreTab, sortColumn));
  };
  return (
    <div className="App">
      <div className="row">
        <div className="col-2">
          <ListGroup onChange={handleGenreChange} genre={GenreTab} />
        </div>
        <div className="col">
          <MoviesTable
            movies={movieList}
            sortColumn={sortColumn}
            onDelete={handleDelete}
            onLike={handleLiked}
            pageNumber={pageNumber}
            maxitems={numberOfItems}
            liked={liked}
            onSort={handleSort}
          />
          {pageCount !== 1 && (
            <Pagination
              pageCount={pageCount}
              handlePage={handlePage}></Pagination>
          )}
        </div>
      </div>
    </div>
  );
}
