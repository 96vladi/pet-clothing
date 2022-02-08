import React from 'react';
import { useParams } from 'react-router-dom';

export const Clothing = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Clothing</h1>
    </div>
  );
};
