const {expect} = require('chai');
var dataset, person, fields;

before(() => {
    dataset = [['name', 'Tochukwu'], ['position', 'Senoir Developer'], ['Income', 'R59,000']];
});

describe('#ChaiExpect', () => {
    beforeEach(() => {
       fields = Object.assign([], dataset);
       fields.forEach((record) => {
           return record[0];
       });

       person = {};
       for(let info in dataset){
           person[dataset[info][0]] = dataset[info][1];
       }
    });

    it("Should have 'name' property", () =>  {
        expect(person.hasOwnProperty('name')).to.be.true;
    });

    it("Name should be Tochukwu", () => {
        expect(dataset[0][1]).equal(person.name);
    });

    it("Should be 3", () => {
        expect(fields.length).equal(3);
    })
});