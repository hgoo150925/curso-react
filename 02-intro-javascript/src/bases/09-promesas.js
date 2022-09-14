import { getActorsById } from './08-imp-exp';

// https://es.javascript.info/promise-basics

// Imagina que eres un gran cantante y los fanáticos te preguntan día y noche por tu próxima canción.

// Para obtener algo de alivio, prometes enviárselos cuando se publique. Le das a tus fans una lista.
// Ellos pueden registrar allí sus direcciones de correo electrónico, de modo que cuando la canción esté disponible,
// todas las partes suscritas la reciban instantáneamente.
// E incluso si algo sale muy mal, digamos, un incendio en el estudio tal que no puedas publicar la canción, aún se les notificará.

// Todos están felices: tú, porque la gente ya no te abruma, y los fanáticos, porque no se perderán la canción.

// Las promesas son asincronas, primero se ejecuta lo que es sincrono (secuencial)
// La tarea termina en la pila de ejecucion de JS y cuando termine el trabajo
// se ejecuta de form asincrona la promesa

// Las promesas se crean con un argumento callback, el callback recibe un resolve (que es un callback) y reject
// Resolve cuando la promesa es Ok
// Reject cuando la promesa es KO

// Una promesa es un Objeto

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Cuando esta tarea termine llamamos al resolve y ejecutamos el then
    const actor = getActorsById(3);
    resolve(actor);
    reject('No se pudo manejar el error');
  }, 2000);
});

// then que la promesa se hizo Ok
// catch que la promesa dio un error
// finally es lo ultimo que se ejecuta

// Despues del resolve se ejecuta el then
promesa
  .then(actor => {
    // console.log('Then de la promesa');
    console.log(`Hollywood: ${actor.name}`);
  })
  .catch(err => console.log(err));

const getActorByIdAsync = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Cuando esta tarea termine llamamos al resolve y ejecutamos el then
      const actor = getActorsById(id);

      actor !== undefined
        ? resolve(actor)
        : reject(`No se encontro el heroe con el id: ${id}`);
    }, 2000);
  });
};

getActorByIdAsync(1)
  .then(actor => {
    // console.log('Then de la promesa');
    console.log(`Hollywood: ${actor.name}`);
  })
  .catch(err => console.log(err));
