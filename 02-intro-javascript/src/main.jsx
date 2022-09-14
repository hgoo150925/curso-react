console.log('from argentina');

import { hollywood } from './api/hollywood';

const getActorsById = id => {
  return hollywood.find(actor => actor.id === id);
};
let res = getActorsById(3);
console.log(res);

res = getActorsById(4);
console.log(res);

const getActorsByLetter = name => {
  return hollywood.filter(actor => actor.name.includes('L'));
};
console.log(getActorsByLetter());
