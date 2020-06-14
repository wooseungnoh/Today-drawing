import { LOAD_ALLGALLERY_FAILURE } from './drawing';

export const initialState = {
  user: [],
};

export const LOAD_USER_DATA_SUCCESS = 'LOAD_USER_DATA_SUCCESS';
export const LOAD_USER_DATA_FAILURE = 'LOAD_USER_DATA_FAILURE';
export const LOAD_USER_DATA_REQUEST = 'LOAD_USER_DATA_REQUEST';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_DATA_SUCCESS: {
      return {
        ...state,
        user: [...action.data],
      };
    }
    case LOAD_USER_DATA_REQUEST: {
      return {
        ...state,
      };
    }
    case LOAD_ALLGALLERY_FAILURE: {
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
