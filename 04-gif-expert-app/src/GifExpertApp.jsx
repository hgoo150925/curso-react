import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Kung Fu Panda']);

  const onAddCategory = newCategory => {
    // validar que no se repita el nuevo valor que ingresa a categories
    if (categories.includes(newCategory)) {
      return;
    }
    // No usar push para agregar un valor al array porque muta el state
    setCategories([...categories, newCategory]);
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
