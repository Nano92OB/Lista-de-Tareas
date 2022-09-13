import React, { useState } from "react";
import Form from "./form/form";
import Title from "./titles/title";
import SubTitle from "./titles/subTitle";
import AlertMessage from "./form/alertMessage";
import ShowList from "./showList/showList";

const BoxLista = () => {
  const [tareas, setTareas] = useState([]);
  const agregarTarea = (valueInput,valuePrioridad) => {
    if (valuePrioridad === ""){
        console.log("seleccione una prioridad")
        return 
    } 
    const nuevaTarea = { tarea: valueInput, prioridad: valuePrioridad };
    setTareas([...tareas, nuevaTarea]);
    console.log(tareas);
  };

  return (
    <main>
      <Title
        // Paso una propiedad - {Hay logica presente}
        text="Lista de Tareas!"
      ></Title>

      <Form
      onAgregar={agregarTarea}
      ></Form>

      <SubTitle text={"Tareas!"} />
      {tareas.length === 0 && (
        <AlertMessage
          idMessage={"mensaje-lista-vacia"}
          alertText={"Parece que no hay nada por aqui!"}
        />
      )}

      <ShowList
      tareas={tareas}
      > </ShowList>
    </main>
  );
};

export default BoxLista;
