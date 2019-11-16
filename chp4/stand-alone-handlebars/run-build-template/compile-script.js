/***
 * This script compiles a handlebar template and returns HTML
 *
 * To compile the email.html template, run the command:
 * $ node complile-cli.js 'Email body'
 * This will generate some HTML String
 */

const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const data = {
    title: 'practical node.js',
    author: '@aza',
    tags: ['express', 'node', 'javascript']
};

data.body = process.argv[2];
const filePath = path.join(__dirname, 'email-template.html');

data.tableData = [
    {name: 'express', url: 'http://expressjs.com/'},
    {name: 'hapi', url: 'http://spumko.github.io/'},
    {name: 'compound', url: 'http://compoundjs.com/'},
    {name: 'derby', url: 'http://derbyjs.com/'}
];

fs.readFile(filePath, 'utf-8', (error, source) => {
    if (error) return console.error(error);
    //Register helper to generate table HTML from data (array)
    handlebars.registerHelper('table', (data) => {
        let str = '<table>';
        for (let i = 0; i < data.length; i++) {
            str += '<tr>';
            for (var key in data[i]) {
                str += '<td>' + data[i][key] + '</td>';
            }
            str += '</tr>';
        }
        str += '</table>';
        return new handlebars.SafeString(str);
    });

    //Register helper to create capitalize a string
    handlebars.registerHelper('custom_title', (title) => {
        let words = title.split(' ');
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 4) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
        }
        title = words.join(' ');
        return title;
    });
    const template = handlebars .compile(source);
    const html = template(data);
    fs.writeFile("generated-template/email.html", html, (err) => {
       if (err) {
         console.log(err);
       } else {
         console.log(html);
       }
    });

});
