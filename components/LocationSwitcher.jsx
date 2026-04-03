'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getLonLatList } from '@/lib/location-info';
import Link from 'next/link';

export default function LocationSwitcher() {
    const [isListOn, setIsListOn] = useState(false);
    const [lonLatList, setLonLatList] = useState([]);
    const listHandler = () => {
        setIsListOn(!isListOn);
    }

    useEffect(() => {
        async function getLocationList() {
            const locationlist = await getLonLatList();
            setLonLatList(locationlist);
        }
        getLocationList();
    }, []);
    return (
        <div className="relative">
            <button onClick={listHandler} >
                <Image className="size-9" src="./link.svg" width='80' height='20' alt="link icon" />
            </button>

            {isListOn && <div
                className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2"
            >
                <ul
                    role="list"
                    className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
                >
                    {lonLatList.map((element) =>
                        <li key={element.city}>
                            <Link href={`${element.city}?latitude=${element.latitude}&longitude=${element.longitude}`}>
                                {element.city}
                            </Link>
                        </li>)}
                </ul>
            </div>}

        </div>
    )
}
