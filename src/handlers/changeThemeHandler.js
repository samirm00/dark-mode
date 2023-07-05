import { dom } from '../data.js';
const changeThemeHandler = () => {
    dom.html.classList.toggle('dark-theme');
};

export default changeThemeHandler;
