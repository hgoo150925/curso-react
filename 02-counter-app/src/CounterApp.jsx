import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {
  // https://midu.dev/react-hooks-introduccion-saca-todo-el-potencial-sin-class/
  // useState devuelve un valor con estado y una función para actualizarlo
  // useState recibe un parámetro: el valor inicial del estado
  // y devuelve un array de dos posiciones:
  // la primera (valor), tiene el valor del estado
  // la segunda (setValor), el método para actualizar el estado
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubstract}> -1 </button>
      <button aria-label="btn-reset" onClick={handleReset}>
        {' '}
        Reset{' '}
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
