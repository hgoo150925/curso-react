export const FirstApp = () => {
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
      {/* dentro de las llaves pueden ir expresiones de JS que no sean objetos */}
      <h2>{newMessage}</h2>
      <h3>{newObj.name}</h3>
      <code>{JSON.stringify(newObj)}</code>
    </>
  );
};
