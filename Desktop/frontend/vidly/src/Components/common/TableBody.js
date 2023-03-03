import { star } from 'fontawesome';
import React from 'react'
import _ from 'lodash';

const heartButton = (liked,_id,onLike) => {
    return (
        <i
            className={"fa-heart " + (liked === false ? "fa-regular" : "fa-solid")}
            onClick={() => { console.log("ur clicking onLike"); return onLike(_id);}}
    />
  );
};

const temp2 = (
  startIndex,
  pageNumber,
  maxNumberOfItems,
  columns,
  ix,
  item,
  onDelete,
  liked,
  onLike
) =>
  startIndex + Number(maxNumberOfItems) > ix &&
  ix >= startIndex && (
    <tr>
      {columns.map((column, iy) => (
        <td>
          <> {_.get(item, column.path)} </>
        </td>
      ))}
      <td>
        <button className="btn btn-primary" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </td>
            <td>{heartButton(liked, item._id, onLike)}</td>
    </tr>
  );
export default function TableBody(props) {
    const { data, columns, pageNumber, maxNumberOfItems ,onDelete ,liked,onLike} = props;
    const startIndex = (pageNumber - 1) * maxNumberOfItems;
    return (
      <tbody>
            {data.map((item, ix) => { return temp2(startIndex, pageNumber, maxNumberOfItems, columns,ix,item,onDelete,liked,onLike) })}
        
      </tbody>
    )
};

