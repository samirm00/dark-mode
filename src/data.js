export const data = {
    articles: [
        {
            id: 1,
            title: 'the WET Codbase',
            date: new Date(2020, 9, 4),
            length: 11,
            text: `I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of.`,
        },
        {
            id: 2,
            title: 'goodby, clean code',
            date: new Date(2019, 10, 22),
            length: 5,
            text: `Biodiesel artisan seitan plaid sriracha copper mug venmo shabby chic. Kickstarter raclette kombucha, yr post-ironic jianbing try-hard flexitarian vaporware normcore.`,
        },
        {
            id: 3,
            title: 'my decade in review',
            date: new Date(2018, 7, 11),
            length: 5,
            text: `Direct trade shabby chic four dollar toast, tilde actually try-hard bicycle rights aesthetic forage. Meditation keytar asymmetrical tacos artisan truffaut. Pabst jean shorts roof party scenester.`,
        },
        {
            id: 4,
            title: 'what are the react team principles',
            date: new Date(2015, 5, 4),
            length: 5,
            text: `Selvage street art hammock affogato VHS. Mustache shaman literally wayfarers schlitz. Direct trade four loko narwhal VHS pop-up, chartreuse trust fund typewriter street art swag thundercats art party.`,
        },
    ],
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'september',
        'October',
        'november',
        'December',
    ],
};

export const dom = {
    toggleBtn: document.querySelector('.btn'),
    articlesContainer: document.querySelector('.articles'),
    html: document.documentElement,
};
