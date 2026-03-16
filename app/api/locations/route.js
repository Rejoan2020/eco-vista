import { getLocations } from "./location-data"

export function GET(){
    let locations = getLocations();
    return Response.json(locations);
}