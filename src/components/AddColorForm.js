import React from 'react';
import useInput from './hooks/useInput'

export default function AddColorForm({ onNewColor = f => f }){
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = e => {
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <from onSubmit={submit}>
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
        </from>
    );
}