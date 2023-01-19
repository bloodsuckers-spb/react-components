import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import Card from 'components/Card';
import Spinner from 'components/Spinner';

import './index.css';

const Character = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !state && navigate('/');
  });

  return (
    <main className="main">
      {!state ? <Spinner /> : <Card data={state} />}
      <Link className="escape" to="/">
        Escape
      </Link>
    </main>
  );
};

export default Character;
