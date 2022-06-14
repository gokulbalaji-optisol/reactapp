import { put, takeEvery } from 'redux-saga/effects';
import {login } from 'services/AuthServices';
import {getGenres , getGenreSuccess , getGenreFailure} from '../slices/genre-slice';
import sagaActions from 'redux/sagaActions';
import { fetchAllGenre , addGenreData} from 'services/GenreServices';
export function* fetchGenre(action){
        yield put(getGenres())
        try{
            const response = yield fetchAllGenre(action) ;
            console.log('dispatch',response)
            const data = response.data;
            yield put(getGenreSuccess(data))
        }catch(error){
            console.log(error)
            yield put(getGenreFailure())
        }
}

export function* watchGenreAsync(){
    yield takeEvery(sagaActions.FETCH_GENRE , fetchGenre)
}