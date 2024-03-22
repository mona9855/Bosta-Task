import React from 'react'
import { FormattedMessage } from 'react-intl'
import TrackingNavbar from './TrackingNavbar'

const Error = () => {
  return (
    <div>
        <TrackingNavbar />
        <div className="w-[100vw] h-[50vh] flex items-center justify-center text-white p-2">
            <p className="bg-red-600 py-6 px-8 rounded-xl">
              <FormattedMessage
                defaultMessage="No data available, invalid shipment number. Please try again...☹️ "
                id="no.data"
              />
            </p>
          </div>
    </div>
  )
}

export default Error