import React from "react";
import { useState } from "react";
import ButtonForm from "./buttonForm";
import DifferentOption from "./differentOption";

const Form = ({ idInput, placeholderInput, onAgregar }) => {
  const [valueInput, setValueInput] = useState("");
  const [valuePrioridad, setValuePrioridad] = useState("");

  const onSelectChange = (e) => {
    console.log(e);
    setValuePrioridad(e.target.value);
    console.log(valuePrioridad);
  };

  const onInputChange = (e) => {
    setValueInput(e.target.value);
    console.log(valueInput);
  };

  return (
    <form action="">
      <input
        id={idInput}
        placeholder={placeholderInput}
        name={idInput}
        type="text"
        onInput={onInputChange}
      />
      <select name="prioridad" id="prioridad" onChange={onSelectChange}>
        <option value="" disabled selected>
          Prioridad
        </option>
        <DifferentOption valueOption={"prioridad-baja"} textOption={"Baja"} />
        <DifferentOption valueOption={"prioridad-media"} textOption={"Media"} />
        <DifferentOption valueOption={"prioridad-alta"} textOption={"Alta"} />
      </select>

      <ButtonForm
        idButton={"agregar"}
        textButton={"Agregar!"}
        onClick={(e) => {
          e.preventDefault();
          onAgregar(valueInput, valuePrioridad);
        }}
      />
    </form>
  );
};
/*
<form action="javascript:void(0);">
<input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea">
<select name="prioridad" id="prioridad">
  <option value="" disabled selected>Prioridad</option>
  <option value="prioridad-baja">baja</option>
  <option value="prioridad-media">media</option>
  <option value="prioridad-alta">alta</option>
</select>
<button id="agregar">Agregar!</button>
</form>

*/

export default Form;
