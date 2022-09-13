import React from "react";
import DifferentOption from ""

const DifferentSelect = ({nameSelect, }) => {
    return (
        <select id={nameSelect} name={nameSelect}>
            <option value="" disabled selected> {nameSelect} </option>
            <DifferentOption> </DifferentOption>
            <DifferentOption> </DifferentOption>
            <DifferentOption> </DifferentOption> 
        </select>
    )
}

export default DifferentSelect;