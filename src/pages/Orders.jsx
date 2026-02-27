import React from 'react'
import { redirect, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'
import { ComplexPaginationContainer, SectionTitle } from '../components'
import { OrdersList } from '../components'

const queryOrders = (user, params) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  }
}

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user
    if (!user) {
      toast.warn('please, login first.')
      return redirect('/login')
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])

    try {
      const response = await queryClient.ensureQueryData(
        queryOrders(user, params),
      )

      return { orders: response.data.data, meta: response.data.meta }
    } catch (error) {
      console.log(error)
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error accessing your orders'

      toast.error(errorMessage)
      if (error?.response?.status === 401 || 403) return redirect('/login')

      return null
    }
  }

const Orders = () => {
  const { meta } = useLoaderData()

  if (meta.pagination.total < 1) {
    return <SectionTitle text={'You have no orders'} />
  }
  return (
    <>
      <SectionTitle text={'Your orders'} />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  )
}

export default Orders
