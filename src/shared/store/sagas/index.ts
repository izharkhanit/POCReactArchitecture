import { spawn } from 'redux-saga/effects'
import { formSagas } from './form'

export default function* sagas() {
    yield spawn(formSagas)
}