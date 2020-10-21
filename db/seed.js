// import the connection to the db/connection
const mongoose = require('./connection');

// import the models
const Apparel = require('../models/apparel');
const Dressingrooms = require('../models/dressingrooms');
const { Schema } = require('mongoose');


// create the connection to the db
const db = mongoose.connection;

// data for first piece of apparel:
// const myFirstApparel = {
// 	itemType: 'sweater',
// 	brand: 'All Saints',
// 	color: 'grey',
// };

// create our first dressingroom
// const myFirstDressingroom = {
// 	roomNumber: 1,
//  customerName: 'Allisyn'
// };

// create our first piece of apparel and first dressing room
// Apparel.create(myFirstApparel, (error, apparel) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(apparel)
//     }
//     db.close()
// })

// Dressingrooms.create(myFirstDressingroom, (error, dressingroom) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(dressingroom);
// 	}
// 	db.close();
// });



// Dressingrooms.find({}).deleteMany(() => {
//   Apparel.find({}).deleteMany(() => {
//     let firstDressingroom = Dressingrooms.create({
//       roomNumber: 1,
//       customerName: 'Allisyn',
//     }).then(dressingroom => {
//       Promise.all([
//         Apparel.create({
//           itemType: 'sweater',
//           brand: 'All Saints',
//           color: 'grey'
//         }).then(apparel => {
//           dressingroom.items.push(apparel)
//         }),
//         Apparel.create({
//           itemType: 'joggers',
//           brand: 'Splendid',
//           color: 'black'
//         }).then(apparel => {
//           dressingroom.items.push(apparel)
//         })
//       ]).then(() => {
//         dressingroom.save()
//       })
//     })  
//   })
// })
