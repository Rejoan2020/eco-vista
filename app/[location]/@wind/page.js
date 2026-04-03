import React from 'react'
import Image from 'next/image'
import { getLocation } from '@/lib/location-info';
import { getWindData } from '@/lib/weather-info';

export default async function WindPage({searchParams}) {
  const {latitude, longitude} = await searchParams;
  const {speed, deg} = await getWindData(latitude,longitude);
  return (
      <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
        <div className="card">
          <h6 className="feature-name">Wind</h6>
          <div className="absolute left-3/9 top-1/4 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
            <Image
              className="max-w-20"
              src="/icon_wind.png"
              width='80'
              height='20'
              alt="rain icon"
            />
            <h3 className="feature-title">{speed} m/s</h3>
            <span className="feature-name">{deg} deg</span>
          </div>
        </div>
      </div>
  )
}
