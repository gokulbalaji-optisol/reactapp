import { put, takeEvery } from 'redux-saga/effects';
import {login } from 'services/AuthServices';
import {authSliceLogin , authSliceLogout} from '../slices/auth-slice';
import sagaActions from 'redux/sagaActions';
export function* userLogin(action){
    let user;
    try{
        console.log('action payload',action)
        user = yield login(action.DataObj);
        yield put(authSliceLogin(user.data));
    }catch(err){
        console.log(err);
    } 
}


export function* watchAuthAsync(){
    yield takeEvery(sagaActions.AUTH_LOGIN , userLogin)
}