import React from "react";

import Circle from "../Circle/Circle";

import "../../App.css";
import "./List.css";

const List = ({
  title,
  items,
  numbering,
  dotted,
  rootS,
  titleS,
  listS,
  itemStyle,
  bulletStyle,
  pS,
}) => {
  return (
    <div style={rootS} className="listRoot">
      <p style={titleS} className="proxima-bold title">
        {title}
      </p>
      <ul style={listS} className="list">
        {items.map((v, i, _) => {
          return (
            <li style={itemStyle} className="item flex-row">
              {numbering ? (
                <div style={bulletStyle} className="center">
                  <p
                    style={{ ...pS, marginRight: 10 }}
                    className="proxima-normal"
                  >
                    {i + 1}.
                  </p>
                </div>
              ) : null}
              {dotted ? (
                <div style={bulletStyle} className="center">
                  <Circle style={{ marginRight: 10 }} size={dotted} />
                </div>
              ) : null}
              <p style={pS} className="proxima-normal">
                {v}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
