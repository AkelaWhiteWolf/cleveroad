// import returnCoordinatesISS from "./modules/returnCoordinatesISS";
import createGoogleMap from "./modules/createGoogleMap";
import showCoordinatesISSByText from "./modules/showCoordinatesISSByText";
import showCurrentTime from "./modules/showCurrentTime";
import showAstronauts from "./modules/showAstronauts";

createGoogleMap();
showCoordinatesISSByText();
showCurrentTime();
showAstronauts();

setInterval(() => {
    showCoordinatesISSByText();
    showCurrentTime();
    // showAstronauts();
}, 5000);
