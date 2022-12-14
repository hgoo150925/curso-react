import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  // hooks son funciones
  // https://beta.reactjs.org/apis/react/useState

  // https://midu.dev/react-hooks-introduccion-saca-todo-el-potencial-sin-class/
  // useState devuelve un valor con estado y una función para actualizarlo
  // useState recibe un parámetro: el valor inicial del estado
  // y devuelve un array de dos posiciones:
  // la primera (valor), tiene el valor del estado
  // la segunda (setValor), el método para actualizar el estado

  // esto es una desestructuracion de useState
  // cuando hay un cambio en el estado se vuele a disparar el functional component
  const [counter, setCounter] = useState(value);

  // https://bobbyhadz.com/blog/react-too-many-re-renders-react-limits-the-number
  // const increment = setCounter(counter + 1);
  // al agregar la funcion increment y en el onClick hacer una funcion de contador
  // tuve el siguiente error que muestro en el link

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button aria-label="btn-reset" onClick={() => setCounter(value)}>
        reset
      </button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
