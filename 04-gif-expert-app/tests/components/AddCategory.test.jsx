import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    // Se crea el sujeto de prueba
    render(<AddCategory onNewCategory={() => {}} />);
    // Extraemos el input
    const input = screen.getByRole('textbox');

    // Disparamos el evento
    fireEvent.input(input, { target: { value: 'Oogway' } });
    // Realizamos la asercion
    expect(input.value).toBe('Oogway');
    // screen.debug();
  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Oogway';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // cambiar el valor de la caja de texto
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('no debe de llamar el onNewCategory si el input está vació', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
