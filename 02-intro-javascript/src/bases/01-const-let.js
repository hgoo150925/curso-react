// https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/
// ya no utilizamos var en javascript
// utilizamos let y const
const name = 'Ryan';
const lastname = 'Gosling';

// si voy a cambiar el valor de someValue lo dejo en let
let someValue = 2022;
someValue += 3;
console.log(name, lastname, someValue);

// let crea variables de scope o en un ambito en particular
if (true) {
  // someValue solo existe en este ambito o scope del if
  let someValue = 5;
  console.log(someValue);

  const name = 'Locho';
  console.log(name);
}
