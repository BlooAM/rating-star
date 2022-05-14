import React, { useContext } from 'react'
import { useColors } from './color-hooks';
import Color from './Color'

export default function ColorList(){
    const { colors } = useColors();
    if(!colors.length) return <div>No colors. (Add color)</div>;
    return (
        <div className="color-list">
            {
                colors.map(color => ( <Color key={color.id} {...color} />))
            }
        </div>
    );
}