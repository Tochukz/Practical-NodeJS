const mongoskin = require('mongoskin');
const {toObjectID} = mongoskin.helper;
const dbHost = '127.0.0.1';
const dbPort = 27017;
/**'test' is the name of he databse */
const db = mongoskin.db(`mongodb://${dbHost}:${dbPort}/test`);

/**Defining a custom method in a collection */
db.bind('messages').bind({
    findOneAndAddText: function(city, fn) {
        /**no fat arror function because we need to let bind pass the collection 
         * to use 'this' on the next line... 'this' can be replaced with db.messages too
         */
        this.findOne({}, (error, document) => {
            if (error) {
                console.error(error);
                return process.exit(1);
            }
            console.info('findOne: ', document);
            document.city = city;
            var id = document._id.toString(); //We can store ID in a string
            console.info('before saving: ', document);
            this.save(document, (error, count) => {
                if (error) {
                    console.error(error);
                    return process.exit(1);
                }
                console.info('save:', count);
                return fn(count, id);
            });
        });
    }
});

/**Using the custom method */
db.messages.findOneAndAddText('Cape Town', (count, id) => {
    db.messages.find({
        _id: toObjecctID()
    }).toArray((error, documents) => {
        if (error) {
            console.error(error);
            return process.exit(1);
        }
        console.info('find: ', documents);
        db.close();
        process.exit(0);
    });
});