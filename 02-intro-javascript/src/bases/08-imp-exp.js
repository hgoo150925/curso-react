import { hollywood } from '../api/hollywood';

// https://es.javascript.info/array-methods#filter

export const getActorsById = id => {
  return hollywood.find(actor => actor.id === id);
};
let res = getActorsById(3);
// console.log(res);

res = getActorsById(4);
// console.log(res);

export const getActorsByLetter = () => {
  return hollywood.filter(actor => actor.name.includes('L'));
};
// console.log(getActorsByLetter());
