import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILURE } from '../constants/Page'




export function getPhotosRequest(year) {

    return {
        type: GET_PHOTOS_REQUEST,
        payload: year
    }

}

export function getPhotosSuccess(data) {

    return {
        type: GET_PHOTOS_SUCCESS,
        payload: data
    }

}

export function getPhotosFailure(error) {

    return {
        type: GET_PHOTOS_FAILURE,
        payload: error
    }

}


export function getPhotos(year) {

    return function (dispatch, getState) {


         dispatch( getPhotosRequest(year));

        if (+year == 2014) {

        setTimeout(function () {
            dispatch(getPhotosSuccess(['photo1', 'photo2', 'photo3']));

        }, 3000);
        }
        else {
            setTimeout(function () {
                dispatch(getPhotosFailure('Ошибочка вышла'));

            }, 3000);
        }





    }

}



//Это action creator. Он создает action.