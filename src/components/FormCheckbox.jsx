import React from 'react'

const FormCheckbox = ({ name, label, defaultValue, size }) => {
  return (
    <fieldset className="fieldset items-center justify-items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      ></input>
    </fieldset>
  )
}

export default FormCheckbox
