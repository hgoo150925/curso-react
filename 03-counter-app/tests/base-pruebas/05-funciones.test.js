import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Test en 05-funciones...', () => {
  test('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'Lola_Varria325',
    };

    const user = getUser();
    expect(user).toEqual(testUser);
  });

  test('getUsuario debe retornar un objeto', () => {
    const name = 'Ryan Gosling';

    const user = getUsuarioActivo(name);
    expect(user).toEqual({
      uid: 'ABC567',
      username: name,
    });
  });
});
