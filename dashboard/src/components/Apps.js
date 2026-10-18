import React from 'react'
import { GeneralContextProvider } from './GeneralContext'
function Apps() {
  return (
    <GeneralContextProvider>
      <div>
        <h1>Apps</h1>
      </div>
    </GeneralContextProvider>
  )
}

export default Apps
