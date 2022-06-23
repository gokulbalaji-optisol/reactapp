import { put, takeEvery } from 'redux-saga/effects';
import {getOrders , getOrderSuccess , getOrderFailure} from '../slices/order-slice';
import sagaActions from 'redux/sagaActions';
import { fetchAllOrder , fetchAllSellerOrder } from 'services/OrderServices';
export function* fetchOrder(action){
        yield put(getOrders())
        try{
            const response = yield fetchAllOrder(action) ;
            console.log('dispatch',response)
            const data = response.data;
            yield put(getOrderSuccess(data))
        }catch(error){
            console.log(error)
            yield put(getOrderFailure())
        }
}

export function* fetchSellerOrder(action){
    yield put(getOrders())
    try{
        const response = yield fetchAllSellerOrder(action) ;
        console.log('dispatch',response)
        const data = response.data;
        yield put(getOrderSuccess(data))
    }catch(error){
        console.log(error)
        yield put(getOrderFailure())
    }
}

export function* watchOrderAsync(){
    yield takeEvery(sagaActions.ADMIN_FETCH_ORDER , fetchOrder);
    yield takeEvery(sagaActions.SELLER_FETCH_ORDER , fetchSellerOrder);
}