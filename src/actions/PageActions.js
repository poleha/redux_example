import { SET_YEAR } from '../constants/Page'

export function setYear(year) {

    return {
        type: SET_YEAR,
        payload: year
    }

}

//Это action creator. Он создает action.