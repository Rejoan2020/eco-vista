import React from 'react'
import Image from 'next/image'
export default function Card({name, value}) {
    const indexes = {
        "co": 'Carbon Monoxide',
        "no": "Nitric Oxide",
        "no2": 'Nitrogen Oxide',
        "o3": 'Ozone',
        "so2": 'Sulfur Dioxide',
        "pm2_5": 'PM2.5',
        "pm10": 'PM10',
        "nh3": 'Ammonia'
    }
    return (
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
                {indexes[name]}
            </div>
            <span className="text-right text-sm text-white lg:text-base"
            >{value} µg/m³</span>

        </div>
    )
}
