import React from "react";

const DifferentOption = ({valueOption, textOption}) => {
    return (
        <option value={valueOption}> {textOption} </option>
    )
}

export default DifferentOption;