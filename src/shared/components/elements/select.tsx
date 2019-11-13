import React from 'react'
import { ElementStyle } from './elements.styled'

export interface optionValues {
    brand: string
    models?: (string)[] | null
}

interface SelectProps {
    value: string
    options: string[]
    handleOnChange: (e: React.FormEvent<HTMLSelectElement>) => void
}

export const Select: React.FunctionComponent<
    SelectProps
> = React.memo(({ value, options, handleOnChange }) => {
    return (
        <select style={ElementStyle} value={value} onChange={handleOnChange}>
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
});
