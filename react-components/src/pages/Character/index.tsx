import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Card from 'components/Card';
import Spinner from 'components/Spinner';

const Character = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !state && navigate('/');
  });

  return <main className="main">{!state ? <Spinner /> : <Card data={state} />}</main>;
};

export default Character;
