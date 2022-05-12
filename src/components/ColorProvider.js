import React, { useContext, useState } from 'react';
import colorData from 'data/color=data.json';

const ColorContext = useContext();

export default function ColorProvider({ children }){
    const [colors, setColors] = useState();
    return (
    <ColorContext.Provider value={{ colors, setColors }}>
        {children}
    </ColorContext.Provider>
    );
};