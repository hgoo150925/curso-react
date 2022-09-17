import PropTypes from 'prop-types';

// https://beta.reactjs.org/learn/passing-props-to-a-component
// las props pasan datos del componente padre al hijo

// podemos desestructurar las props de esta forma -> { title }
export const FirstApp = ({ title, subtitle }) => {
  // Esta variable es parte del componente
  // React no reprocesa (renderizar nuevamente) todo lo que se encuentre fuera de este componente
  // React renderiza todo lo que se encuentre dentro de este componente
  const newMessage = "What's up!";

  const newObj = {
    name: 'Ryan Gosling',
    country: 'United States',
  };

  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <h2>{subtitle}</h2>
      {/* dentro de las llaves pueden ir expresiones de JS que no sean objetos */}
      <h2>{newMessage}</h2>
      <h3>{newObj.name}</h3>
      <code>{JSON.stringify(newObj)}</code>
    </>
  );
};

// https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/
// PropTypes
FirstApp.propTypes = {
  // la prop title es string y es requerido
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'No hay subtitulo',
};
