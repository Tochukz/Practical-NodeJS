const app = require('derby').createApp(module);

app.get('/', function(page, model, _arg, next) {
    const snippetId = model.add('snippets', {
        snippetName: _arg.snippetName,
        code: 'var'
    });
    return page.redirect('/', + snippetId);
});

app.get('/:snippetId', function(page, model, param, next) {
    const snippet = model.at(`snippets.${param.snippetId}`); 
    // TO support reqal-time updates to the DOM
    snippet.subscribe(function(err) {
        if (err) return next(err);
        console.log(snippet.get());
        model.ref('_page.snippet', snippet);
        page.render();
    });
});

/*
model.at(collection_name.ID) is akin to findById()
*/