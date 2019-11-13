export interface CarOption {
    brand: string
    models: string[]
}

export interface State {
    options: CarOption[];
    value: string;
    handleOnChange: () => void;
}