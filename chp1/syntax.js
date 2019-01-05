const bufFromArray = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
console.log(bufFromArray.toString());

const arrayBuffer = new Uint16Array(2); //buffer
arrayBuffer[0] = 5;
arrayBuffer[1] = 7000;

const bufFromArrayBuffer = Buffer.from(arrayBuffer.buffer);
console.log(bufFromArrayBuffer); //<Buffer 05 00 58 1b>

/**
 * This new syntax has an added benefit of safer this due to its value always remaining an outer this
 */
const fullname = (fname, lname) => { 
    //'this' keyword will always refer to the outer this. 
    return `The full name is ${fname} ${lname}`;
};
console.log(fullname('Tochukwu', 'Nwachukwu'));

/**
 * Pass Function as a parameter
 */
const square = function(num){
    return num**2;
};

const processTimesTen = function(num, func){
    return func(num) * 10;
};

console.log(processTimesTen(4, square));

/**
 * functional inheritance pattern in which two function factories create objects user and admin :
 */
let user = function(userInfo) {
    return {
        firstname: userInfo.firstname || 'John',
        lastname:  userInfo.lastname ||  'Smith',
        email: userInfo.email || 'john.smith@gmail.com',
        status: userInfo.status || 'user',
        toString: function() {
            return `${this.firstname} ${this.lastname}, ${this.email} is ${this.status}`;
        }
    };
};

let admin = function(userInfo) {
    let adminUser = user(userInfo);
    adminUser.status = userInfo.status || 'Editor';
    adminUser.department = 'Editorial';
    return adminUser;
};

user1 = user({firstname: 'Chima', lastname: 'Eze', email: 'chima.eze@yahoo.com'});
admin1 = admin({firstname: 'Jeremy', email: 'jemery.smith@outlook.com'});
console.log(`User1: ${user1.toString()}`);
console.log(`Admin1: ${admin1}`);


/**
 * ES6 class construct
 */

 class Person
 {
     constructor(user, skills = []){
         this.firstname = user.firstname;
         this.lastname = user.lastname;
         this.skills = skills;
     }

     getName(){
         return `${this.firstname} ${this.lastname}`;
     }
 }

 class Dev extends Person
 {
     constructor(dev, langs){
         super(dev, langs);
         this.position = dev.position;
     }

     getProfile(){
         return `${this.getName()} is a ${this.position},  skilled in ${this.skills}`;
     }
 }

const person = new Person({firstname: 'Chuka', lastname: 'Ovili'});
const dev = new Dev({firstname: 'Tochukwu', lastname: 'Nwachukwu', position: 'Senior Dev'}, ['PHP', ' C#', ' node JS', ' JavaScript']);
console.log(person.getName());
console.log(dev.getProfile());

/**
 * We can access useful process information in code with the process object
 */
console.log(`Process ID: ${process.pid}`);
console.log(`Curren Working Directory: ${process.cwd()}`);
/**
 * Other properties and methods of process object are:
 *  process.argv, process.stdin(), process.stdout(), process.timeup(), process.exit(), process.kill() and many more.  
 */