// PropTypes define el tipo a las properties
import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, defaultTitle }) => {
  // props es informacion que va desde el componenente padre hasta el hijo
  const name = 'Bruno';

  const newMessage = {
    country: 'Argentina',
    language: 'Spanish',
  };

  return (
    // <></> Fragment agrupador de elementos jsx que retorna un nodo padre
    <>
      {/* Renderizar un objeto
      <code>{JSON.stringify(newMessage)}</code> */}
      <h1>{title}</h1>
      <p>Country: {subTitle}</p>
      <p>Language: {defaultTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
FirstApp.defaultProps = {
  defaultTitle: 'English',
};
