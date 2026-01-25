import React from 'react'

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <fieldset className="fieldset">
      <label
        htmlFor={name}
        className="fieldset-legend text-neutral/65 capitalize text-sm font-normal"
      >
        {label}
      </label>
      <input
        type={type}
        className={`input ${size}`}
        placeholder={defaultValue}
        name={name}
      />
    </fieldset>
  )
}

export default FormInput
