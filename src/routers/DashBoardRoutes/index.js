import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../../components/NavBar';
import { Summer } from '../../components/Summer';
import { Winter } from '../../components/Winter';
import { Clothing } from '../../components/Clothing';

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className='container mt-3'>
        <Routes>
          <Route excat path="/summer" element={ <Summer /> }/>
          <Route excat path="/clothing/:Id" element={ <Clothing /> }/>
          <Route excat path="/winter" element={ <Winter /> }/>
          <Route path="/" element={ <Summer /> }/>
        </Routes>
      </div>
        
    </>);
  };
