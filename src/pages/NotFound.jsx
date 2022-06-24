import React, { useContext, useEffect } from 'react';
import PageMessage from '../components/PageMessage';
import ApplicationContext from '../react-hooks/useContext/ApplicationContext';

const NotFound = () => {
  const { isAuthenticated, refreshIsAuthenticated } =
    useContext(ApplicationContext);

  useEffect(() => {
    refreshIsAuthenticated();
  }, []);
  return (
    <>
      <PageMessage message="Pagina no encontrada 😢" />
      <h3>isAuthenticated: {isAuthenticated ? 'true' : 'false'}</h3>
    </>
  );
};

export default NotFound;
