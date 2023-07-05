import formatDate from '../utils/formateDate.js';

const createArticle = (articleData) => {
    // create article
    const article = document.createElement('article');
    article.classList.add('post');

    // create title
    const title = document.createElement('h2');
    title.innerText = articleData.title;

    // create post info
    const postInfo = document.createElement('div');
    postInfo.classList.add('post-info');

    // create format date
    const date = document.createElement('span');
    date.innerText = formatDate(articleData.date);

    // create length
    const lengthRead = document.createElement('span');
    lengthRead.innerText = articleData.length + ' mins read';

    // append
    postInfo.append(date, lengthRead);

    // create snippet
    const text = document.createElement('p');
    text.innerText = articleData.text;

    article.append(title, postInfo, text);

    return article;
};

export default createArticle;
