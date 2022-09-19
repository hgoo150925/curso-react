import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Oogway']);

  const onAddCategory = newCategory => {
    // validar que no se repita el nuevo valor que ingresa a categories
    if (categories.includes(newCategory)) {
      return;
    }
    // No usar push para agregar un valor al array porque muta el state
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory newCategory={value => onAddCategory(value)} />

      {categories.map(category => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
