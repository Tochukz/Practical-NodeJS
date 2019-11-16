const personTemplate = document.getElementById('personTemplate').innerHTML;
const templateFunction = Handlebars.compile(personTemplate);
const contextObject = {
  name: 'Tochukwu',
  jobTitle: 'Software Developer Architech',
  isArchitech: true, 
  summary: "<h4>Tochukwu is a highly paid software developer, R60k+</h4>"
};
const compiledHTML = templateFunction(contextObject);
document.getElementById('personDiv').innerHTML = compiledHTML;
