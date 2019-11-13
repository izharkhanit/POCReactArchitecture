import React, { useState } from 'react'
import { ElementStyle } from './elements.styled'

export function Input() {
    const [currentValue, onChange] = useState('')
    return (

        <input
            style={ElementStyle}
            type="text"
            value={currentValue}
            onChange={event => onChange(event.target.value)}
        />

    );
}
