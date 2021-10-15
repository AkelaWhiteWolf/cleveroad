export default async function returnCoordinatesISS() {
    'use strict';
    
    let request = await fetch("http://api.open-notify.org/iss-now.json");
    request = await request.json();

    let result = {
        lat: Number(request.iss_position.latitude),
        lng: Number(request.iss_position.longitude)
    }
    return result;
}

    // const longitudeElem = document.querySelector('.longitude');
    // const latitudeElem = document.querySelector('.latitude');