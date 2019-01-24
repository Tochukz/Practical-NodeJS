module.exports.index = (req, res, next) => {
    const articles = req.collections
                        .articles
                        .find({})
                        .toArray((error, articles) => {
                            if(error){
                                next(new Error('NO articles'));
                            }
                            res.render('index', {articles});
                        });
};