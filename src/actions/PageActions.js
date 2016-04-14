import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILURE, GET_PHOTOS_CANCEL } from '../constants/Page'


var timeoutId;

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


export function getPhotosCancel() {
    clearTimeout(timeoutId);
    //Тут мы будем отменять ajax запрос.
    return {
        type: GET_PHOTOS_CANCEL,
        payload: 'Загрузка отменена'
    }

}


export function getPhotos(year) {

    return function (dispatch, getState) {


         dispatch( getPhotosRequest(year));


        if (+year == 2014) {

        timeoutId = setTimeout(function () {
            dispatch(getPhotosSuccess(['http://cs621931.vk.me/v621931175/23045/CVHsUC40OB8.jpg', 'http://cs621931.vk.me/v621931175/23045/CVHsUC40OB8.jpg']));

        }, 3000);
        }
        else {
            timeoutId = setTimeout(function () {
                    dispatch(getPhotosFailure('Ошибочка вышла'));

            }, 3000);
        }




    }

}



//Это action creator. Он создает action.