import React from "react";
import { Link } from "react-router-dom";
export default function CategorySubMenuitems({
  heading,
  array,
  arrayItem,
  To,
}) {
  return (
    <div>
      <Link className="text-lightblue font-bold h-12">{heading}</Link>
      <ul>
        {array.map((arrayItem) => {
          return (
            <li>
              <Link to={To}>{arrayItem}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
