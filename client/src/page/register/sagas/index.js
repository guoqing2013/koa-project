import { take, put, call, fork, select } from 'redux-saga/effects'
import axios from 'axios'
// import fetch from 'isomorphic-fetch'
import {SUBMIT_REGISTER} from '../constants/index'
import * as actions from '../actions/index'
// import { selectedRedditSelector, postsByRedditSelector } from '../reducers/selectors'

export function fetchRegisterApi(payload) {
  return axios.post('http://localhost:8889/api/register', payload)
  .then((response) => {
    return {response};
  })
  .catch((error) => ({error}));
}

// export function* fetchRegister(reddit) {
// }

export function* submitRegister() {
  while (true) {
    const { payload } = yield take(SUBMIT_REGISTER)
    // yield call(fetchRegister, reddit)
    // yield put(actions.submitRegister(payload))
    const { response, error } = yield call(fetchRegisterApi, payload);
    debugger;
    // yield put(actions.submitRegisterSuccess(payload, response))
  }
}

// export function* nextRedditChange() {
//   while (true) {
//     const prevReddit = yield select(selectedRedditSelector)
//     yield take(actions.SELECT_REDDIT)

//     const newReddit = yield select(selectedRedditSelector)
//     const postsByReddit = yield select(postsByRedditSelector)
//     if (prevReddit !== newReddit && !postsByReddit[newReddit]) yield fork(fetchPosts, newReddit)
//   }
// }

// export function* startup() {
//   const selectedReddit = yield select(selectedRedditSelector)
//   yield fork(fetchPosts, selectedReddit)
// }

export default function* root() {
  // yield fork(startup)
  // yield fork(nextRedditChange)
  yield fork(submitRegister)
}