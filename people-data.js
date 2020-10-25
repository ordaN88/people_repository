const moment = require('moment');
const faker = require('faker');

const data = [];
for (let  i = 0; i<10; i ++ ){
    data.push ({
     mark : faker.random.uuid().slice(0, 15), 
     address: `${faker.address.streetAddress()} ${faker.address.country()}`,
     area : i + 1,//faker.random.number(),
     owner: `${faker.name.firstName()} ${faker.name.lastName()}`,
        
    })
}
console.log(data)

module.exports = data;