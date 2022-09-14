// https://es.javascript.info/destructuring-assignment#desestructuracion-de-arrays

const users = ['Ryan Gosling', 'Dwayne Johnson', 'Leo DiCaprio'];

// Desestructuracion de arreglo
const [user1, user2] = users;
console.log(user1, user2);
// Imprimie 'Ryan Gosling', 'Dwayne Johnson'

// Desestructuro la tercera posicion
const [_, x, user3] = users;
console.log(user3);
// Imprime 'Leo DiCaprio'

const getArray = () => {
  return ['ABC', 'XYZ'];
};

const [arr1, arr2] = getArray();
console.log(arr1, arr2);

// useState
const useState = value => {
  return [
    value,
    () => {
      console.log('Hello, World!');
    },
  ];
};
const arr = useState('Ryan Gosling');
console.log(arr);

const [nombre, setNombre] = useState('Ryan Gosling');
console.log(nombre);
setNombre();
