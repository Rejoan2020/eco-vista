'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';

export default function LocationDetector() {
    const pathName = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const params = new URLSearchParams(searchParams);
        navigator.geolocation.getCurrentPosition((position) => {
            params.set('latitude', position.coords.latitude);
            params.set('longitude', position.coords.longitude);
            setIsLoading(false);
            router.push(`/current?${params.toString()}`)
        });
    }, [pathName, searchParams]);

    return (
        <>
            {isLoading && <div className='flex content-center justify-center min-h-screen w-full'>
                <p>Loading...</p>
                <div><Image
                    src="/network.gif"
                    width="500"
                    height="500"
                    alt='Loading...'
                /></div>
                
            </div>}
        </>
    )
}
