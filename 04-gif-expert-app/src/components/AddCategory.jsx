import { useState } from 'react';
import PropTypes from 'prop-types';

// https://beta.reactjs.org/learn/passing-props-to-a-component
// las props pasan datos del componente padre al hijo
export const AddCategory = ({ newCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = event => {
    setInputValue(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    newCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
