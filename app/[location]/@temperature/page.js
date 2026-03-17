import React from 'react'
import Image from 'next/image'
export default function TemperaturePage() {
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
        <div className="card">
          <h6 className="feature-name">Current Temperature</h6>
          <div className="absolute left-3/9 top-1/4 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
            <Image
              className="max-w-20"
              src="/icon_tempareture.png"
              width='80'
              height='20'
              alt="rain icon"
            />
            <h3 className="feature-title">246.43°C</h3>

            <span className="feature-name">Feels Like 244°C</span>
          </div>
        </div>
      </div>
  )
}
