// https://es.javascript.info/async-await

// Existe una sintaxis especial para trabajar con promesas de una forma más confortable, llamada “async/await”.
// Es sorprendentemente fácil de entender y usar

// La palabra “async” ante una función significa solamente una cosa: que la función siempre devolverá una promesa.

// Entonces, async se asegura de que la función devuelva una promesa, o envuelve las no promesas y las transforma en una.
// Await funciona solamente dentro de funciones async
// await hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.
const getImage = async () => {
  try {
    const apiKey = 'HX4npOV3yntlrXLaChcORpp6ZJO12xe2';

    const res = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await res.json();
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};
getImage();
