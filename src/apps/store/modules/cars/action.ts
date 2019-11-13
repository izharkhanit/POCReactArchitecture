import { createActionCreator, PayloadAction } from 'typed-redux-kit';
import { CarOption } from './state';

export enum ActionNames {
    REQUEST_CARS_DATA = 'cars/REQUEST_CARS_DATA',
    SUCCESS_CARS_DATA = 'cars/SUCCESS_CARS_DATA'
}


export type RequestFetchCar = PayloadAction<
    ActionNames.REQUEST_CARS_DATA,
    { brand: string, model: string }
>

export type SuccessCarsData = PayloadAction<
    ActionNames.SUCCESS_CARS_DATA,
    CarOption[]
>

export type ActionTypes =
    | RequestFetchCar
    | SuccessCarsData

export const ActionCreators = {
    requestFetchCar: createActionCreator<RequestFetchCar>(
        ActionNames.REQUEST_CARS_DATA
    ),
    successCarsData: createActionCreator<SuccessCarsData>(
        ActionNames.SUCCESS_CARS_DATA
    )
};

export type ActionCreators = typeof ActionCreators;
