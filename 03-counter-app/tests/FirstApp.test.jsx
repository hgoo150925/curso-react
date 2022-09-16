import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  //   test('debe de hacer match con el snapshot', () => {
  //     const title = 'oka';
  //     // funcion que renderiza el componente en memoria
  //     // render retorna un objeto con ciertas propiedades
  //     const { container } = render(<FirstApp title={title} />);

  //     expect(container).toMatchSnapshot();
  //   });

  test('debe de mostrar el titulo en un h1', () => {
    const title = 'oka';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toBe(title);

    expect(getByTestId('test-title').innerHTML).toBe(title);
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const title = 'oka';
    const subTitle = 'No hay subtitulo';
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    expect(getAllByText(subTitle).length).toBe(1);
  });
});
