import { takeEvery } from 'redux-saga/effects'
import { ActionNames } from '../../../../apps/store/modules/cars'
import { getCarsData } from './form-data'

export function* formSagas() {
    yield takeEvery([ActionNames.REQUEST_CARS_DATA], getCarsData)
}