import { put, takeEvery } from 'redux-saga/effects';
import {fetchAllBanner } from 'services/BannerServices';
import {getBanners,getBannerFailure , getBannerSuccess} from '../slices/banner-slice';
import sagaActions from 'redux/sagaActions';
export function* fetchBanner(){
    yield put(getBanners())
    try{
        const response = yield fetchAllBanner() ;
        console.log('dispatch',response)
        const data = response.data;
        yield put(getBannerSuccess(data))
    }catch(error){
        console.log(error)
        yield put(getBannerFailure())
    }
}


export function* watchBannerAsync(){
    yield takeEvery(sagaActions.FETCH_BANNER , fetchBanner)
}