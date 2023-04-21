// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import ClassForm from './component/ClassForm';
import FunctionalForm from './component/FunctionalForm';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <ClassForm />
      <FunctionalForm />
    </div>
  )
}

export default App

