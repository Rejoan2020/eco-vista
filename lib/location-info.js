export async function getLocation(lat, lon) {
    try {
        const response = await fetch(`https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}
            &localityLanguage=en&key=${process.env.NEXT_PUBLIC_LOCATION_API_KEY}`)
        const data = await response.json();
        return data;

    } catch (e) {
        console.log(e.message);
    }
}

export async function getLonLat(locationName){
    try{
        const response = await fetch(`/api/locations/${locationName}`);
        const data = await response.json();
        return data;
    }catch(e){
        console.error(e.message);
    }
}

export async function getLonLatList(){
    try{
        const response = await fetch(`/api/locations`);
        const data = await response.json();
        return data;
    }catch(e){
        console.error(e.message);
    }
}