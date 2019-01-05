const fs = require('fs');
const path = require('path');

/**Reading from file */
fs.readFile(path.join(__dirname, '/storage/tools.log'), {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
       console.log(data); 
    }
});

/**Writing to a file */
fs.writeFile(path.join(__dirname, '/storage/langs.txt'), "PHP, \n\C#, \nJavaScript \nPython", (err) => {
    if(err){
        console.error(err);
        process.exit(1);
    } else {
        console.log('Done writing');
    }
});

//Streaming data to standard output
fs.createReadStream(path.join(__dirname, '/storage/reservations.logs')).pipe(process.stdout);

//Reading directory
fs.readdir(path.join(__dirname, '/storage'), (err, files) => {
    if(err){
        console.error(`Error finding files ${err}`);
    }else {
        files.forEach((filename, fileIndex) => {
            console.log(filename);
        });
    }
})