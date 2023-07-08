import { data, dom } from '../data.js';
import createArticle from '../components/createArticle.js';

const loadPageHandler = () => {
    data.articles.forEach((articleData) => {
        const articleDom = createArticle(articleData);
        dom.articlesContainer.append(articleDom);
    });
};

export default loadPageHandler;
