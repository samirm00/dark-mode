import { data } from '../data.js';

const formatDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    month = data.months[month];
    if (day === 1) {
        day = `${day}st`;
    } else if (day === 2) {
        day = `${s}nd`;
    } else if (day === 3) {
        day = `${day}rd`;
    } else {
        day = `${day}th`;
    }

    return `${month} ${day}, ${year}`;
};

export default formatDate;
