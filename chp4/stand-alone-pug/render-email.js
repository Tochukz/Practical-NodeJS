const pug = require('pug');

let data = {
    title: 'Practical Node.js',
    author: {
        twitter: '@azatmardan',
        name: 'Azat',
    },
    tags: ['express', 'node', 'javascript']
};
data.body = process.argv[2];

pug.renderFile('views/email.pug', data, (error, html) => {
    console.log(html);
});

