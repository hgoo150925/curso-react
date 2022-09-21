import { useState } from 'react';

export const useForm = (inititalForm = {}) => {
  const [formState, setFormState] = useState(inititalForm);

  const onInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(inititalForm);
  };

  return {
    formState,
    onInputChange,
    onResetForm,
  };
};
