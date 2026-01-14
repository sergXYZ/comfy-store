import React from 'react'
import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div>
      <button
        type="submit"
        className="btn btn-primary btn-block uppercase"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="loading loading-spinner loading-md"></span>
            sending...
          </>
        ) : (
          text || 'submit'
        )}
      </button>
    </div>
  )
}

export default SubmitBtn
