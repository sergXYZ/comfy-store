import React from 'react'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'
import { Form, Link, useLoaderData } from 'react-router-dom'
import FormSelect from './FormSelect'
import FormPrice from './FormPrice'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
  const { meta, params } = useLoaderData()
  const { search, company, category, shipping, order, price } = params

  return (
    <Form className="bg-base-200 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 px-4 py-8 items-center rounded-lg">
      {/* SEARCH */}
      <FormInput
        label="search product"
        name="search"
        type="search"
        size="input-sm"
        defaultValue={search}
      ></FormInput>

      {/* CATEGORY */}
      <FormSelect
        name={'category'}
        label={'select category'}
        list={meta.categories}
        size={'select-sm'}
        defaultValue={category}
      ></FormSelect>

      {/* COMPANY */}
      <FormSelect
        name={'company'}
        label={'select company'}
        list={meta.companies}
        size={'select-sm'}
        defaultValue={company}
      ></FormSelect>

      {/* SORT */}
      <FormSelect
        name={'order'}
        label={'sort by'}
        list={['a-z', 'z-a', 'high', 'low']}
        size={'select-sm'}
        defaultValue={order}
      ></FormSelect>

      {/*Price */}
      <FormPrice name={'price'} label={'select price'} size="range-sm" />

      {/* SHipping */}
      <FormCheckbox
        name={'shipping'}
        label={'free shipping'}
        defaultValue={shipping}
        size={'checkbox-sm'}
      />
      <button
        type="submit"
        className="btn btn-primary btn-sm uppercase text-md"
      >
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm uppercase text-md">
        reset
      </Link>
    </Form>
  )
}

export default Filters
