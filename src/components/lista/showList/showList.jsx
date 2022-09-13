import React from "react";

const ShowList = ({tareas}) => {
  return (
    <ul>
        {tareas.map((item, index) => {
          return (
            <li className={item.prioridad} key={index}>
              {item.tarea}
            </li>
          );
        })}
      </ul>
  );
};

export default ShowList;
 