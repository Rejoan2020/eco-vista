import React from 'react'
import Image from 'next/image'
import { getWeatherData } from '@/lib/weather-info'
export default async function WeatherPage({ params, searchParams }) {
  const { latitude, longitude } = await searchParams;
  const { main, description } = await getWeatherData(latitude, longitude);
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Current Weather</h6>
        <div className="absolute left-3/9 top-1/4 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
          <Image
            className="max-w-20"
            src="/icon_rain.png"
            alt="rain icon"
            width='80'
            height='20'
          />
          <h3 className="feature-title">{main}</h3>
          <span className="feature-name">{description}</span>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}
