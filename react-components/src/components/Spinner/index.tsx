import React from 'react';
import './index.css';
import { PropagateLoader } from 'react-spinners';

const Spinner = () => (
  <div className="spinner">
    <PropagateLoader />
  </div>
);

export default Spinner;
