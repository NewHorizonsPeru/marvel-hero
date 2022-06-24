import React, { useState } from 'react';
import ApplicationContext from './ApplicationContext';

const ApplicationContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const refreshIsAuthenticated = () => {
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 10000);
  };

  const applicationContextValues = {
    isAuthenticated: isAuthenticated,
    refreshIsAuthenticated: refreshIsAuthenticated,
  };

  return (
    <ApplicationContext.Provider value={applicationContextValues}>
      {/** CONTENIDO QUE RECIBIRA ESTE CONTEXTO */}
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
