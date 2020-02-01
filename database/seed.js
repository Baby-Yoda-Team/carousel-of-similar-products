const mongoose = require('mongoose');
const faker = require('faker');
const MONGODB_URL = require('./mongoose.js');
const db = require('./mongoose.js');


db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('connected to Database')
})



const similarProductsCollection = db.collection('similarProducts');

let similarProducts = [];

for (let i = 0; i <101; i++) {
  const similarProductsId = faker.random.number();
  const similarProductsName = faker.commerce.productName();
  const similarProductsImage = faker.image.image();
  const similarProductsUrl = faker.internet.url();
  const randomReviewScore = faker.random.number();
  const similarProductsMembersOnly = faker.random.boolean();
  const similarProductsPrice = faker.commerce.price();
  let similarProduct = {
    similarProductsId,
    similarProductsName,
    similarProductsImage,
    similarProductsUrl,
    randomReviewScore,
    similarProductsMembersOnly,
    similarProductsPrice

  };
  similarProducts.push(similarProduct);
  console.log(similarProducts)
}
similarProductsCollection.insertMany(similarProducts);
console.log('Database seeded!')






