import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

describe('Prueba en 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    expect(heroe).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    });
  });

  test('getHeroeById debe de retornar undefined si el id no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner debe de regresar heroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);
    expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner));
  });

  test('getHeroesByOwner debe de regresar heroes de Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    afd;

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner));
  });
});
