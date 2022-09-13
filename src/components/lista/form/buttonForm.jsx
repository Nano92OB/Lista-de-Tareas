import React from "react";

const ButtonForm = ({idButton, textButton, onClick}) =>{
    return(
        <button onClick={onClick} id={idButton}> {textButton} </button>
    )
}

export default ButtonForm;