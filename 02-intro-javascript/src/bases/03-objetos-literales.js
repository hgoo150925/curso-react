// https://es.javascript.info/object#literales-y-propiedades
// https://makeitrealcamp.gitbook.io/javascript-book/objetos-literales

// un objeto
let user = {
  name: 'Ryan', // En la clave "name" se almacena el valor "John"
  lastname: 'Gosling',
  age: 30, // En la clave "age" se almacena el valor 30
  country: 'Canada',
  address: {
    city: 'Toronto',
    lat: 14.84723,
    lng: 34.98474,
  },
};

// https://es.javascript.info/rest-parameters-spread
console.log({ ...user });

console.log(user);
console.log(user.name);
console.log(user.lastname);
console.log(user['country']);
console.log(user.address);
console.log(user.address.city);
console.log(...user);
