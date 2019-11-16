const person = document.getElementById('person');
const personObj = {
  name: 'Tochukwu',
  city: 'Cape Town',
  almaMater: 'University of the Witwatersrand'
}

const professionObj = {
  name: 'Tochukwu',
  jobTitle: 'Software Developer',
  competencies: 'PHP, C#, JavaScript'
}

const personHTML = Handlebars.templates.person(personObj);
const professionHTML = Handlebars.templates.profession(professionObj);
person.innerHTML = personHTML + professionHTML;
