import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  // https://midu.dev/react-hooks-use-effect-funcionalidad-en-el-ciclo-vida-componentes/
  // useEffect, un hook que recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice,
  // ya sea por un cambio de estado, por recibir props nuevas y/o porque es la primera vez que se monta
  useEffect(() => {
    // getGifs(category);
    getImages();
  }, []); //[] -> si dejo mi dependencia vacia, useEffect se va a ejecutar la primera vez que se renderiza mi componente

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(image => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
