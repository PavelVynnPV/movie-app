import React from "react";

function InputSearch({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  labelText,
  className
}) {
  return(
  <div>
    <label htmlFor={name}>{labelText}</label>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
    />
  </div>
  )
}

export default InputSearch;