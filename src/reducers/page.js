import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILURE } from '../constants/Page'

const initialState = {
  year: 2016,
  photos: [],
  loadind: false,
  error: ''

};


export default function page(state = initialState, action) {

  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, photos:[], loadind: true, year:action.payload, error: '' };
    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, loadind: false, error: '' };
    case GET_PHOTOS_FAILURE:
      return { ...state, photos: [], error: action.payload, loadind:false };

    default:
      return state;
  }

}