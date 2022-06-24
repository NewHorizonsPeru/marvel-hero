import React, { useEffect, useState } from 'react';

const WithoutDep = () => {
  const [userData, setUserData] = useState({});

  const refreshUserData = () => {
    setUserData({
      email: 'admin@newhorizons.edu.pe',
      id: '781d2sa1d5a4dsada1h<',
    });
  };

  useEffect(() => {
    refreshUserData();
  }, [userData]);

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-6">
          {userData.email ? <h1>{userData.email}</h1> : <h1>Cargando...</h1>}
        </div>
      </div>
    </div>
  );
};

export default WithoutDep;
