import React from 'react';
import './App.css';
import ColorList from './components/ColorList';
import AddColorForm from './components/AddColorForm';

export default function App() {
  return (
    <>
      <AddColorForm/>
      <ColorList/>
    </>
  );
}