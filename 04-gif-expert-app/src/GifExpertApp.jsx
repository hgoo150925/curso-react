import { useState } from 'react';

export const GifExpertApp = () => {
  // Cuando desee almacenar data y esa data debe ser renderizado entonces usare hooks de React para el estado
  // https://midu.dev/react-hooks-introduccion-saca-todo-el-potencial-sin-class/
  // useState devuelve un valor con estado y una función para actualizarlo
  // useState recibe un parámetro: el valor inicial del estado
  // y devuelve un array de dos posiciones:
  // la primera (valor), tiene el valor del estado
  // la segunda (setValor), el método para actualizar el estado
  const [categories, setCategories] = useState(['Cats', 'Dogs']);

  const onAddCategory = () => {
    // No usar push para agregar un valor al array porque muta el state
    setCategories([...categories, 'Shifu']);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <ul>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ul>
      <button onClick={onAddCategory}>Add +1</button>
    </>
  );
};
