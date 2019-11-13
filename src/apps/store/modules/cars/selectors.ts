import { createSelector } from 'reselect'

import { State as appState } from '../index';

export const selectCarDataFromState = (state: appState) => state.cars

export const selectCarValue = createSelector(
    [selectCarDataFromState],
    cars => cars.value
)

export const selectCarOptions = createSelector(
    [selectCarDataFromState],
    cars => cars.options
)
