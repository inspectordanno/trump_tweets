// Object destructuring

console.log('destructure');

const person = {
  name: 'Dan',
  age: 26,
  location: {
    city: 'boston',
    temp: 34
  }
}

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-published'} = book.publisher;

console.log(publisherName);

// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}.`);.

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee , , priceMedium] = item;

console.log(`A medium ${coffee} costs ${priceMedium}`);




