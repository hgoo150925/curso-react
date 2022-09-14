// https://medium.com/@germancutraro/template-strings-js-es6-194a2c88d0f4

const name = 'Ryan';
const lastname = 'Gosling';

// concatenamos las variables
const author = `${name} ${lastname} lives in Buenos Aires`;
console.log(author);

function getSaludo() {
  return `Hello ${name} from Buenos Aires`;
}

console.log(`Get saludo: ${getSaludo()}`);

// cualquier valor que no inicialicemos en JS es undefined
