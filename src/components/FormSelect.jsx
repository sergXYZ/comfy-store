import React from 'react'
import { Form } from 'react-router-dom'

const FormSelect = ({ label, name, defaultValue, size, list }) => {
  return (
    <fieldset className="fieldset">
      <label
        htmlFor={name}
        className="fieldset-legend text-neutral/65 capitalize text-sm font-normal"
      >
        {label}
      </label>
      <select
        className={`select ${size}`}
        name={name}
        id={name}
        defaultValue={defaultValue}
      >
        {list.map((company) => {
          return (
            <option key={company} value={company}>
              {company}
            </option>
          )
        })}
      </select>
    </fieldset>
  )
}

export default FormSelect
