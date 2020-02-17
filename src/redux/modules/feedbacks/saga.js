import { all, call, put, takeEvery } from 'redux-saga/effects';
import {ActionTypesFeedbacks, ValidateFeedbacks} from './index';
import validateData from './validators'

export function* fetchFeedbacksWorker(action) {
    const {payload} = action
    const formValidation = validateData(payload)
    const formData = {
        data: payload,
        formValidation
    }
    yield put(ValidateFeedbacks(formData));
}

export function* watchFeedbacksActionsSaga() {
  yield all([
    takeEvery(ActionTypesFeedbacks.UPDATE_FEEDBACKS, fetchFeedbacksWorker)
  ]);
}