import React from 'react'
import { FormattedMessage } from 'react-intl'

const Loading = () => {
  return (
    <div className="w-[100vw] h-[50vh] flex items-center justify-center p-2">
          <p>
            <FormattedMessage
              defaultMessage="Loading please wait....."
              id="loading.wait"
            />
          </p>
        </div>
  )
}

export default Loading