import { TemplatePublic } from '@templates/template-public';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import { HomePage } from './public/home-page';

function App() {
  return (
    <Routes>
      <Route element={<TemplatePublic />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
