import { put } from "redux-saga/effects"
import { ActionCreators } from "../../../../apps/store/modules/cars"

const url = "https://api.myjson.com/bins/ygjic"
export function* getCarsData() {
    var response = yield fetch(url);
    const data = yield response.json();
    yield put(ActionCreators.successCarsData(data))
}