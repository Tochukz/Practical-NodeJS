const pug = require('pug');
const fs = require('fs');

let data = {
    title: 'Practical Node.js',
    author: {
        twitter: '@azatmardan',
        name: 'Azat',
    },
    tags: ['express', 'node', 'javascript'],
    pretty: true
};
data.body = process.argv[2];

fs.readFile('views/email.pug', 'utf-8', (error, source) => {
    /** Usin pug.compile() */
    //let template = pug.compile(source);
    //let html = template(data);

    /**Using pug.render() */
    const html = pug.render(source, data);

    console.log(html);

    //To pug.renderFile() we don't need the fs module.
});