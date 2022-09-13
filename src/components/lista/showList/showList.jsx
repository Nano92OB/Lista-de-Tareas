import React from "react";

const ShowList = ({tareas, onDoubleClick}) => {
  return (
    <ul>
        {tareas.map((item, index) => {
          return (
            <li onDoubleClick={() => onDoubleClick(index)} className={item.prioridad} key={index}>
              {item.tarea}
            </li>
          );
        })}
      </ul>
  );
};

export default ShowList;
 