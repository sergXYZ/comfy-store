import React from 'react'

const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-neutral/65 capitalize text-sm font-normal">
        {label}
      </legend>
      <input
        type={type}
        className="input"
        placeholder={defaultValue}
        name={name}
      />
    </fieldset>
  )
}

export default FormInput
