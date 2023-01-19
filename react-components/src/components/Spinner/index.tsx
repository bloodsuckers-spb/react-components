import React from 'react';

import { PropagateLoader } from 'react-spinners';

import './index.css';

const Spinner = () => (
  <div className="spinner">
    <PropagateLoader />
  </div>
);

export default Spinner;
