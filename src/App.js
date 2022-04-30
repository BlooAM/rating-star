import React, { useState } from 'react'
import './App.css';
import colorData from './data/color=data.json'
import ColorList from './components/ColorList'


function App() {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}
export default App;