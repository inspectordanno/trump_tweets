import firebase from 'firebase/app';
import 'firebase/database';
import $ from 'jquery';

$('#before_form').submit((e) => {
  e.preventDefault(); //prevent default form action
})


const config = {
  apiKey: "AIzaSyCYVGCqyTx2fFh_Ntj_2Wtg_MQV_oOOKbE",
  authDomain: "killing-the-penny-230200.firebaseapp.com",
  databaseURL: "https://killing-the-penny-230200.firebaseio.com",
  projectId: "killing-the-penny-230200",
  storageBucket: "killing-the-penny-230200.appspot.com",
  messagingSenderId: "195799161355"
};

firebase.initializeApp(config);

const database = firebase.database();

//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})



database.ref('expenses').on('value', (snapshot) => {

  const expenses = [];

  snapshot.forEach((childSnapshot) => {
  expenses.push({
    id: childSnapshot.key,
    ...childSnapshot.val()
  });
  });

  console.log(expenses);
  });

database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
  });

database.ref('expenses').push({
  description: 'food',
  note: 'stop n shop',
  amount: 100,
  created_at: 'monday'
})

database.ref('notes').push({
  title: 'course topics',
  body: 'react native, angular'
});


//read and update (once)

const dataSub = database.ref().once('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
  console.log('error with data fetching', e)
}).then((snapshot) => {
  const val = snapshot.val();
  database.ref().update({
    age: val.age + 10,
    'location/city': 'Mars'
  })
})

// subscription

const dataSub = database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
  console.log('error with data fetching', e)
})

// updating the subscription doesn't work?

.then((snapshot) => {
  const val = snapshot.val();
  database.ref().update({
    age: val.age() + 1,
    'location/city': 'LA'
  })
})

// read once

database.ref('location/city')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('error fetching data', e)
  })

// set database

database.ref().set({
  name: 'Dan',
  age: 26,
  stressLevel: 6,
  job: {
    title: 'software developer',
    company: 'google'
  },
  location: {
    city: 'Boston',
    country: 'United States'
  }
}).then(() => {
  console.log('data is saved!');
}).catch((error) => {
  console.log('this failed.', error)
})

// update database

database.ref().update({
  stressLevel: 9,
  'location/city': 'Seattle',
  'job/company': 'Amazon'
});


