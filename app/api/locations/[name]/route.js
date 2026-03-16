import { getLocation } from "../location-data";

export async function GET(request, {params}){
    const {name} = await params;
    const locationData = getLocation(name);
    return Response.json(locationData);
}