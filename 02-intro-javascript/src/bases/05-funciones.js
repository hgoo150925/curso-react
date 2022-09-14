// https://es.javascript.info/function-basics

function saludar(name) {
  return `Hola, ${name}`;
}

const saludar2 = function (name) {
  return `Hola, ${name}`;
};

// arrow functions
const saludar3 = name => `Hola, ${name}`;

const getUser = () => {
  return {
    uid: '12345',
    username: 'user_123',
  };
};

const getUser2 = () => ({
  uid: '12345',
  username: 'user_123',
});

const getUserActivo = name => ({
  uid: 'ABC567',
  username: name,
});

console.log(saludar('Ryan Gosling'));
console.log(getUser());
console.log(getUserActivo('Tom'));
