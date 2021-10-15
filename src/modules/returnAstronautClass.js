export default function returnAstronautClass() {
    'use strict';

    const Astronaut = class {
        constructor(name) {
            this.name = name;
            this.cardElement = document.querySelector('.astronaut-card').cloneNode(true);
        }

        pushAstronautInDOM() {
            const containerElement = document.querySelector('.astronauts-container');
            const nameElement = this.cardElement.querySelector('[data-astronaut-name]');

            nameElement.innerText = this.name;
            containerElement.append(this.cardElement);
            this.cardElement.removeAttribute('data-invisible');
        }

        removeAstronautFromDOM() {
            this.cardElement.remove();
        }
    }

    return Astronaut;
}