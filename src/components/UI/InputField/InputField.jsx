import React from 'react';
import './InputField.scss'

const InputField = (props) => {
  return (
    <input onClick={(e)=> e.target.value=''} type="search" {...props} className="inputField"/>
  );
};

export default InputField;