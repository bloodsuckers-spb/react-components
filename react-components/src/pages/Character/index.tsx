import React from 'react';
import { useLocation } from 'react-router-dom';

const Character = () => {
  const location = useLocation();
  const { id } = location.state;
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default Character;
