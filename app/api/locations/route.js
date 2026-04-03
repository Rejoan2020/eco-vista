import { getLocations } from "./location-data"

export function GET(){
    let locations = getLocations();
    console.log(locations)
    return Response.json(locations);
}