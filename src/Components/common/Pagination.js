import React from 'react';

export default function Pagination(props) {
    const { pageCount ,handlePage} = props;
    return (
      <>
        <nav aria-label="Page navigation">
          <ul className="pagination">
                    {
                        [...Array(pageCount + 1).keys()].slice(1).map((c) => (
                <li className="page-item" key={c._id}>
                <a className="page-link" onClick={() => {return handlePage(c)}}>
                  {c}
                </a>
              </li>
            ))
                    }
          </ul>
        </nav>
      </>
    );
}