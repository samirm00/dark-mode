import { data, dom } from './data.js';
import createArticle from './components/createArticle.js';

import './listeners/changeThemeListener.js';

// default
data.articles.forEach((articleData) => {
    const articleDom = createArticle(articleData);
    dom.articlesContainer.append(articleDom);
});
