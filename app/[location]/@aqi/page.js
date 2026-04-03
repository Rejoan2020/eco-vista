import React from 'react'
import Image from 'next/image'
import { getAQIData } from '@/lib/weather-info';
import Card from '@/components/Card';

export default async function AqiPage({ params, searchParams }) {
  const { location } = await params;
  const { latitude, longitude } = await searchParams;
  const aqiInfo = await getAQIData(latitude, longitude);
  // console.log(aqiInfo);
  const aqi = aqiInfo?.main?.aqi;
  console.log(aqi);
  let aqiVerdict = 'Good';
  if (aqi === 5) aqiVerdict = 'Hazardous';
  else if (aqi === 4) aqiVerdict = 'Very Unhealthy';
  else if (aqi === 3) aqiVerdict = 'Unhealthy';
  else if (aqi === 2) aqiVerdict = 'Unhealthy for sensetive group'; 
  else aqiVerdict = 'Good';
  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-6">
      <div className="card">
        <h6 className="feature-name">Air Pollution & Quality</h6>

        {/* <!-- info items --> */}
        <div className="mt-3 space-y-2 lg:space-y-3">
          {/* <!-- item --> */}
          <div className="flex items-center justify-between gap-4">
            <div
              className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
            >
              <Image
                className="max-w-[18px]"
                src="/icon_air_element.png"
                width='80'
                height='20'
                alt="icon"
              />
              Air Quality Index
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {aqiVerdict}
            </span>

          </div>

          {Object.entries(aqiInfo.components).map(([key, value]) => (
            <Card key={key} name={key} value={value} />
          ))}

        </div>
      </div>
    </div>
  )
}
