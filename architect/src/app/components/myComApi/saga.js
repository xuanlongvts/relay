import { put, take, call, fork, select } from 'redux-saga/effects';
import axios from 'axios';

import API from '../../_services/api';
import * as actionList from './actions';
import * as nameActList from './consts';
import { postsByRedditSelector } from './selectors';

const fetchPostsApi = reddit => {
    const restApi = new API();
    const path = `/r/${reddit}.json`;

    return restApi
        .fetch(path)
        .then(res => {
            return res.data.data.children.map(item => {
                return item.data;
            });
        })
        .catch(err => {
            put({
                type: 'ERROR',
                err
            });
            // console.log('err: ', err)
        });
};

function* fetchPosts() {
    while (true) {
        const isOnline = navigator.onLine ? true : false;
        const { reddit } = yield take(nameActList.SELECT_REDDIT);

        let dataPosts = null;
        let getPostsFromState = yield select(postsByRedditSelector);
        getPostsFromState = getPostsFromState.getIn([reddit, 'items']);
        console.log('getPostsFromState 11: ', getPostsFromState);
        !isOnline && getPostsFromState ? (dataPosts = getPostsFromState) : (dataPosts = yield call(fetchPostsApi, reddit));

        yield put(actionList.receivePosts(reddit, dataPosts));
    }
}

function* invalidateReddit() {
    // const delay = ms => new Promise(res => setTimeout(res, ms));
    while (true) {
        const isOnline = navigator.onLine ? true : false;
        console.log('isOnline: ', isOnline);
        const { reddit } = yield take(nameActList.INVALIDATE_REDDIT);

        let dataPosts = null;
        let getPostsFromState = yield select(postsByRedditSelector);
        getPostsFromState = getPostsFromState.getIn([reddit, 'items']);
        console.log('getPostsFromState 22: ', getPostsFromState);
        !isOnline && getPostsFromState ? (dataPosts = getPostsFromState) : (dataPosts = yield call(fetchPostsApi, reddit));

        yield put(actionList.receivePosts(reddit, dataPosts));
    }
}

const fetchTest = () => {
    const restApi = new API();

    const path = 'http://api.samhomes.vn/auth/token';
    var data = {
        client_id: 'cm2',
        secret_id: '80880d532519f7c61325354abc1daba2',
        token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJTSEE1MTIifQ.eyJjbGllbnRfaWQiOiJjbTIifQ.hDXEL5gInVY_TTfRSx-QSgTrAfIalL1CNb6QEpJksvvZZry6-ztJ1fQWlBVfw2rA-aou1iwcktWPhOkQvd4N9Q'
    };
};

function* test() {
    try {
        const data = yield call(fetchTest);
        console.log('data: ', data);
    } catch (e) {
        console.log('e: ', e);
    }
}

export default function* root() {
    yield fork(test);
    yield fork(fetchPosts);
    yield fork(invalidateReddit);
}
