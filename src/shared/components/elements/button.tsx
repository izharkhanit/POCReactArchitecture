import React from 'react'
import { ElementStyle } from './elements.styled'

export interface ButtonProps {
    onClick: () => void
    disable: boolean
}

export const Button: React.SFC<ButtonProps> = ({ disable, onClick }) => (
    <div>
        <button style={ElementStyle} onClick={onClick} disabled={disable}>
            Search Cars
    </button>
    </div>
);
