import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { loginUser } from '../features/user/userSlice'

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData()
  const location = useLocation()
  const { search, pathname } = location
  const navigate = useNavigate()

  const { pageCount, page } = meta.pagination

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams}`)
  }

  const addButton = (pageNumber, activePage) => {
    return (
      <button
        onClick={() => handlePageChange(pageNumber)}
        key={pageNumber}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activePage ? 'bg-base-300 border-base-300' : ''
        }`}
      >
        {pageNumber}
      </button>
    )
  }
  const renderButtons = () => {
    const buttonsArr = []
    //first
    buttonsArr.push(addButton(1, page === 1))
    // first dots
    if (page > 3) {
      buttonsArr.push(
        <button
          key={'dots1'}
          className={`btn btn-xs sm:btn-md border-none join-item $`}
        >
          ...
        </button>,
      )
    }
    //smaller adjacent
    if (page > 2) {
      buttonsArr.push(addButton(page - 1, false))
    }
    //active
    if (page !== 1 && page !== pageCount) {
      buttonsArr.push(addButton(page, true))
    }
    //bigger adjacent
    if (page < pageCount - 1) {
      buttonsArr.push(addButton(page + 1, false))
    }
    // second dots
    if (page < pageCount - 2) {
      buttonsArr.push(
        <button
          key={'dots2'}
          className={`btn btn-xs sm:btn-md border-none join-item $`}
        >
          ...
        </button>,
      )
    }
    //last
    buttonsArr.push(addButton(pageCount, page === pageCount))

    return buttonsArr
  }
  if (pageCount < 2) return null

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1
            if (prevPage < 1) prevPage = pageCount
            handlePageChange(prevPage)
          }}
        >
          Prev
        </button>
        {renderButtons()}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1
            if (nextPage > pageCount) nextPage = 1
            handlePageChange(nextPage)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ComplexPaginationContainer
