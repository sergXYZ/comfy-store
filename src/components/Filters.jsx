import React from 'react'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'
import { Form, useLoaderData } from 'react-router-dom'
import FormSelect from './FormSelect'

const Filters = () => {
  const { meta } = useLoaderData()

  return (
    <Form className="bg-base-200 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-4 py-8 items-center rounded-lg">
      {/* SEARCH */}
      <FormInput
        label="search product"
        name="search"
        type="search"
        size="input-sm"
      ></FormInput>
      {/* CATEGORY */}
      <FormSelect
        name={'category'}
        label={'select category'}
        list={meta.categories}
        size={'select-sm'}
      ></FormSelect>
      {/* COMPANY */}
      <FormSelect
        name={'company'}
        label={'select company'}
        list={meta.companies}
        size={'select-sm'}
      ></FormSelect>
      {/* SORT */}
      <FormSelect
        name={'order'}
        label={'sort by'}
        list={['a-z', 'z-a', 'high', 'low']}
        size={'select-sm'}
      ></FormSelect>
      <button
        type="submit"
        className="btn btn-primary btn-sm uppercase text-md"
      >
        search
      </button>
      <button className="btn btn-accent btn-sm uppercase text-md">reset</button>
    </Form>
  )
}

export default Filters
