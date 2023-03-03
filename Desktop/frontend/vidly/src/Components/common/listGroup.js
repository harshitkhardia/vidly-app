import React ,{useState} from 'react'
import { getGenres } from '../../Services/fakeGenreService';
export default function ListGroup(props) {
    const genres = getGenres();
    console.log("you are printing ListGroup class : ",props.genre)
    return (
      <>
        {genres.map((g) => (
          <ul className="list-group">
            <li
              className={
                props.genre === g.name
                  ? "list-group-item active"
                  : "list-group-item"
              }
              aria-current={props.genre === g.name ? "true" : "false"}
              onClick={() => {
                console.log("you have clicked", g.name);
                props.onChange(g.name);
              }}>
              {g.name}
            </li>
          </ul>
        ))}
      </>
    );
}