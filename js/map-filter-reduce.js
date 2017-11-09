{
    "use strict";
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
        },
    ];

    const threeLang = users.filter(({languages}) => languages.length >= 3);
    console.log(threeLang);

    const emails = users.map(({email}) => email);
    console.log(emails);

    const usersObject = users.reduce((usersObj, {id, name, email, languages})  => {
        usersObj[id] = {name, email, languages};
        return usersObj;
    }, {});
    console.log(usersObject);
}

