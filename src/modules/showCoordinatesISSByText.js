import returnCoordinatesISS from "./returnCoordinatesISS";

export default async function showCoordinatesISSByText() {
    'use strict';

    const coordinates = await returnCoordinatesISS();
    const latitude = document.querySelector('.latitude');
    const longitude = document.querySelector('.longitude');

    latitude.innerText = coordinates.lat;
    longitude.innerText = coordinates.lng;
}