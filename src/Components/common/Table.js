import React from 'react'
import TableBody from './TableBody';
import TableHeaders from './TableHeaders';
const Table = (props) => {
    const {
      columns,
      sortColumn,
      onSort,
      data,
      pageNumber,
      maxitems,
      onLike,
      liked,
      onDelete
    } = props;
    return (
        <table className="table">
        <TableHeaders
            onSort={onSort}
            columns={columns}
            sortColumn={sortColumn}>
        </TableHeaders>
        
        <TableBody
            data={data}
            columns={columns}
            pageNumber={pageNumber}
            maxNumberOfItems={maxitems}
            onDelete={onDelete}
            liked={liked}
            onLike={onLike}
        />
        </table>
    )
};
export default Table;