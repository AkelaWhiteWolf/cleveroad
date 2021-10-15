import returnCoordinatesISS from "./returnCoordinatesISS";

export default function createGoogleMap() {
    function initMap() {

        let options = {
            zoom: 2,
            // this is random values:
            center: {lat: 43.19, lng: 32.09}
        };

        let map = new google.maps.Map(document.querySelector('.google-map'), options);

        let marker = new google.maps.Marker({
            // this is random values:
            position: {lat: 43.19, lng: 32.09},
            map: map,
            title: "ISS is here now"
        });

        refreshMap();    

        async function refreshMap() {
            let coordinates = await returnCoordinatesISS();
            
            marker.setMap(null);
            marker = null;
    
            map.setCenter(coordinates);
    
            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                title: "ISS is here now"
            });
        }

        setInterval(refreshMap, 5000);
    }

    globalThis.initMap = initMap;
}