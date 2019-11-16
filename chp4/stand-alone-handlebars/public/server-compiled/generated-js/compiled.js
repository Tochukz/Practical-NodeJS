(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['person'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div>\r\n  <h2>Person</h2>\r\n  <p><strong>Name</strong> "
    + alias5(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":35}}}) : helper)))
    + "</p>\r\n  <p><strong>City</strong> "
    + alias5(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":4,"column":27},"end":{"line":4,"column":35}}}) : helper)))
    + "</p>\r\n  <p><strong>Alma Mater</strong> "
    + alias5(((helper = (helper = helpers.almaMater || (depth0 != null ? depth0.almaMater : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"almaMater","hash":{},"data":data,"loc":{"start":{"line":5,"column":33},"end":{"line":5,"column":47}}}) : helper)))
    + "</p>\r\n</div>\r\n";
},"useData":true});
templates['profession'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div>\r\n  <h2>Professional</h2>\r\n  <p><strong>Name</strong> "
    + alias5(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":35}}}) : helper)))
    + "</p>\r\n  <p><strong>Job Title</strong> "
    + alias5(((helper = (helper = helpers.jobTitle || (depth0 != null ? depth0.jobTitle : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"jobTitle","hash":{},"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":44}}}) : helper)))
    + "</p>\r\n  <p><strong>Competencies</strong> "
    + alias5(((helper = (helper = helpers.competencies || (depth0 != null ? depth0.competencies : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"competencies","hash":{},"data":data,"loc":{"start":{"line":5,"column":35},"end":{"line":5,"column":51}}}) : helper)))
    + " <p>\r\n</div>\r\n";
},"useData":true});
})();