import React from 'react';
import Table from "./common/Table";

export default function MoviesTable(props) {
  const { movies,onSort, sortColumn,pageNumber,maxitems,liked,onLike,onDelete} = props;
  const columns = [{ path: "title", label: "Title" },
  { path: "genre.name", label: "Genre" },
  { path: "numberInStock", label: "Stock" },
  { path: "dailyRentalRate", label: "Rate" },
  { path: "like" },
  { path: "delete" }];
  const raiseSort = (path) => {
    let result;
    if (sortColumn.path === path) {
       console.log("yess yess");
       const newOrder = sortColumn.order === "asc" ? "desc" : "asc";
       result = { path: path, order: newOrder };
    }
    else {
      result = { path: path, order: "asc" };
  }
    onSort(result);
}
  return (
    <Table
      columns={columns}
      data={movies}
      sortColumn={sortColumn}
      onSort={raiseSort}
      pageNumber={pageNumber}
      maxitems={maxitems}
      onLike={onLike}
      liked={liked}
      onDelete={onDelete}
    ></Table>
  );  

}