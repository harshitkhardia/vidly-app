import React from 'react'

// this component is not a generic use should see we have used Title genre stock this should be passed as a headerColumns
// in props of the function
const renderSortIcon = (sortColumn, column) => {
  if (column.path !== sortColumn.path) return null;
  if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
  return <i className="fa fa-sort-desc" />;
}; 
//<renderSortIcon column={columns} sortColumn={sortColumn}></renderSortIcon>
const TableHeaders = (props) => {
    const { onSort ,columns,sortColumn} = props;
    return (
      <>
        <thead>
          <tr>
            {columns.map((col) => (
              <th className="clickable" onClick={() => onSort(col.path)}>
                {col.label}
                {renderSortIcon(sortColumn, col)}
              </th>
            ))}
          </tr>
        </thead>
      </>
    );
}
export default TableHeaders;