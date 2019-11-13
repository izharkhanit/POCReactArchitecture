import React, { useEffect, useState, useCallback } from 'react';
import { CSSObject } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Select, Input, Button } from '../../../shared/components/elements';
import { selectCarOptions, selectCarValue, ActionCreators } from '../../store/modules/cars';

const formStyle: CSSObject = {
    background: '#ffffff',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: 3,
    boxShadow: '0 1px 2px rgba(0,0,0,.05)',
    width: '50%',
    margin: 20,
    padding: 20,
};

export const Form: React.FunctionComponent = () => {
    const value = useSelector(selectCarValue)
    const options = useSelector(selectCarOptions)

    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ActionCreators.requestFetchCar(undefined))
    }, [])

    const getCarData = useCallback(
        () =>
            dispatch(ActionCreators.requestFetchCar({ brand, model })),
        [dispatch, brand, model]
    )
    const optionsBrand = options.map(option => option.brand)
    optionsBrand.unshift("- All brands -")
    const models = brand &&
        (options.find(option => option.brand === brand) || {} as any).models
        || ["- Select a brand first -"]
    return (
        <div style={formStyle}>
            <h1>Buy a car</h1>
            <h3>Brand:</h3>
            <Select
                data-test-id="#S1"
                value={brand}
                handleOnChange={e => setBrand(e.currentTarget.value)}
                options={optionsBrand}
            />
            <>
                <h3>Model:</h3>
                <Select
                    data-test-id="#S2"
                    value={model}
                    handleOnChange={e => setModel(e.currentTarget.value)}
                    options={models}
                />
            </>
            <h3>Keywords:</h3>
            <Input data-test-id="#T" />
            <hr></hr>
            <Button data-test-id="#B" onClick={getCarData} disable={!brand || !model} />
        </div>
    )
}
