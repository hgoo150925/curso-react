console.log('from argentina');

// Las dos estructuras de datos más usadas en JavaScript son Object y Array.

// Los objetos nos permiten crear una simple entidad que almacena items con una clave cada uno.
// los arrays nos permiten reunir items en una lista ordenada.

// Pero cuando los pasamos a una función, tal vez no necesitemos un objeto o array como un conjunto sino en piezas individuales.

// La asignación desestructurante es una sintaxis especial que nos permite “desempaquetar” arrays u objetos en varias variables, porque a veces es más conveniente.

// La desestructuración también funciona bien con funciones complejas que tienen muchos argumentos, valores por defecto, etcétera

const data = {
  resource: '/items/ITEM_ID/best-price',
  user_id: 12345671234,
  topic: 'best_price_eligible',
  application_id: 2069392825111111,
  attempts: 1,
  sent: '2017-10-09T13:58:23.347Z',
  received: '2017-10-09T13:58:23.329Z',
};

// Asignacion desestructurante
const { user_id, topic } = data;
console.log(user_id, topic);

const user = {
  name: 'Ryan',
  lastname: 'Gosling',
  city: 'Buenos Aires',
  country: '',
  latlng: {},
};

const { name, lastname, city } = user;
console.log(name, lastname, city);

// podemos extraer las propiedades de un objeto en una funcion
const getData = ({ city, country = 'Argentina' }) => {
  return `He's lives in ${city} ${country}`;
};
console.log(getData(user));

const useContext = ({ name, country = 'Portugal' }) => {
  return {
    nombreClave: name,
    lugar: country,
    latlng: {
      lat: 13.4567,
      lng: 25.4531,
    },
  };
};
const avenger = useContext(user);
console.log(avenger);

const {
  nombreClave,
  country,
  latlng: { lat, lng },
} = useContext(user);
console.log(nombreClave, country);
console.log(lat, lng);
