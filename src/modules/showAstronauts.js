import returnAstronautClass from "./returnAstronautClass";

export default async function showAstronauts() {
    'use strict';

    const Astronaut = returnAstronautClass();
    const astronautsOnISS = await returnAstronautsOnISS();
    const astronautCountElement = document.querySelector('[data-astronaut-count]');
    let showedAstronautsNames = [];
    let showedAstronauts = [];

    for (let elem of astronautsOnISS) {
        if (!showedAstronautsNames.includes(elem)) {
            let astronaut = new Astronaut(elem);
            astronaut.pushAstronautInDOM();
            showedAstronauts.push(astronaut);
            showedAstronautsNames.push(astronaut.name);
        }
    }

    // Удаление астронавтов, которых  уже нет на МКС.
    for (let astronautObj of showedAstronauts) {
        if (!astronautsOnISS.includes(astronautObj.name)) {
            astronautObj.removeAstronautFromDOM();
            let index = showedAstronauts.indexOf(astronautObj)
            showedAstronauts.splice(index, 1);
            showedAstronautsName.splice(index, 1);
        }
    }

    astronautCountElement.innerText = showedAstronauts.length;

    async function returnAstronautsOnISS() {
        let astronautsOnISS = [];
        let request = await fetch('http://api.open-notify.org/astros.json');
        request = await request.json();

        for (let elem of request.people) {
            if (elem.craft === 'ISS') {
                astronautsOnISS.push(elem.name);
            }
        }

        return astronautsOnISS;
    }
}