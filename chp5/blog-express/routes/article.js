module.exports.show = (req, res, next) => {
    if(!req.params.slug) return next(new Error('No article slug.'));
    req.collections.articles.findOne({slug: req.params.slug}, 
        (error, article) => {
            if (error) return next(error);
            if (!article) return res.status(401).send();
            res.render('article', article);
        });
};

/** for GET /post  */
module.exports.post = (req, res, next) => {
    if (!req.body.title) {res.render('post');}
};

/** POST /post */
module.exports.postArticle = (req, res, next) => {
    if (!req.body.title || !req.body.slug || !req.body.text) {
        return res.render('post', {error: 'Fill title, slug and text.'});
    }
    const article = {
        title: req.body.title,
        slug: req.body.slug,
        text: req.body.text,
        published: false
    };
    req.collections.articles.insert(article, (error, articleResponse) => {
        if (error) return next(error);
        res.render('post', {message: 'Article was added. Publish it on Admin page.'});
    });
};

/**GET /admin */
module.exports.admin = (req, res, next) => {
    req.collections
       .articles.find({}, {sort: {_id: -1}})
       .toArray((error, articles) => {
           if (error) return next(error);
           res.render('admin', {articles:  articles});
       });
};

/**
 * Defining API endpoints 
 */

/**GET /api/articles */
module.exports.list  = (req, res, next) => {
    req.collections
        .articles
        .find({})
        .toArray((error, articles) => {
            if (error) return next (error);
            res.send({articles: articles});
        });
};

/** POST /api/articles */
module.exports.add = (req, res, next) => {
    if (!req.body.article) return next(new Error('No article payload'));
    let article = req.body.article;
    article.published  = false;
    req.collections.articles.insert(article, (error, articleResponse) => {
        if (error) return next(error);
        res.send(articleResponse); //articleResponse willbe the _id of the newly created item.
    });   
};

/**PUT /api/articles/:id */
module.exports.edit = (req, res, next) => {
    if(!res.params.id) return next(new Error('No article ID.'));
    req.collections.articles.updateById(req.params.id, 
        {$set: req.body.article}, 
        (error, count) => {
            if(error) return next(error);
            res.send({affectedCount: count});
        });
};

/**DELETE /api/articles/:id */
module.exports.del = (req, res, next) => {
    if (!req.params.id) return next(new Error('No article ID.'));
    req.collections.articles.removeById(req.params.id, (error, count) => {
        if (error) return next (error);
        req.send({affectedCount: count});
    });
};

