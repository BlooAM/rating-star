import React from 'react';
import { useInput } from './hooks/useInput';
import { useColors } from './color-hooks';

export default function AddColorForm({ onNewColor = f => f }){
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input 
             {...titleProps} 
             type='text' 
             placeholder='Color name...' 
             required 
            />
            <input 
             {...colorProps} 
             type='color' 
             required 
            />
            <button>ADD</button>
        </form>
    );
}