import React from 'react'
import Image from 'next/image'
import { getMainData } from '@/lib/weather-info'
export default async function TemperaturePage({params, searchParams}) {
  const { latitude, longitude } = await searchParams;
  const {temp, feels_like} = await getMainData(latitude,longitude);
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
            <h3 className="feature-title">{temp}°C</h3>

            <span className="feature-name">{feels_like}°C</span>
          </div>
        </div>
      </div>
  )
}
