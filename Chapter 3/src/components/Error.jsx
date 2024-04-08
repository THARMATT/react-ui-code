import React from 'react'
import {useRouteError} from 'react-router-dom'
const Error = () => {
    const routeError=useRouteError();
  return (
    <div className=''>
      <h2>Something went Wronng</h2>
      <h2>{routeError.status + ":"+routeError.statusText}</h2>

    </div>
  )
}

export default Error
