export default function showCurrentTime() {
    'use strict';

    const date = new Date();

    const dateElem = document.querySelector('.date');
    const timeElem = document.querySelector('.time');

    const currentDateString = `${getTextDayOfWeek()}, ${date.getDate()} ${getTextMonth()} ${date.getFullYear()}`;
    const currentTimeString = `${date.getHours()}:${date.getMinutes()}`;

    if (dateElem.innerText !== currentDateString) {
        dateElem.innerText = currentDateString;
    }

    if (timeElem.innerText !== currentTimeString) {
        timeElem.innerText = currentTimeString;
    }
    
    function getTextDayOfWeek() {
        switch(date.getDay()) {
            case 0: return 'Sunday';
            case 1: return 'Monday';
            case 2: return 'Tuesday';
            case 3: return 'Wednesday';
            case 4: return 'Thursday';
            case 5: return 'Friday';
            case 6: return 'Saturday';
        }
    }

    function getTextMonth() {
        switch(date.getMonth()) {
            case 0: return 'Jan';
            case 1: return 'Feb';
            case 2: return 'Mar';
            case 3: return 'Apr';
            case 4: return 'May';
            case 5: return 'Jun';
            case 6: return 'Jul';
            case 7: return 'Aug';
            case 8: return 'Sep';
            case 9: return 'Oct';
            case 10: return 'Nov';
            case 11: return 'Dec';
        }
    }
};