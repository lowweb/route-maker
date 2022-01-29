import React from 'react';
import './InputField.scss'

const InputField = (props) => {
  return (
    <input onClick={(e)=> e.target.value=''} /*ref={props.inputref}*/ type="search" {...props} className="inputField"/>
  );
};

export default InputField;