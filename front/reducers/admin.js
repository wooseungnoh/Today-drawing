import { LOAD_ALLGALLERY_FAILURE } from './drawing';

export const initialState = {
  user: [],
  post: [],
};

export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE';

export const REMOVE_USER_DATA_REQUEST = 'REMOVE_USER_DATA_REQUEST';
export const REMOVE_USER_DATA_SUCCESS = 'REMOVE_USER_DATA_SUCCESS';
export const REMOVE_USER_DATA_FAILURE = 'REMOVE_USER_DATA_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_POST_REQUEST: {
      return {
        ...state,
      };
    }
    case REMOVE_POST_SUCCESS: {
      return {
        ...state,
        post: action.data,
      };
    }
    case REMOVE_POST_FAILURE: {
      return {
        ...state,
      };
    }
    case REMOVE_USER_DATA_REQUEST: {
      return {
        ...state,
      };
    }
    case REMOVE_USER_DATA_SUCCESS: {
      return {
        ...state,
        user: action.data,
      };
    }
    case REMOVE_USER_DATA_FAILURE: {
      return {
        ...state,
      };
    }
    case LOAD_DATA_SUCCESS: {
      return {
        ...state,
        user: [...action.data.user],
        post: [...action.data.post],
      };
    }
    case LOAD_DATA_REQUEST: {
      return {
        ...state,
      };
    }
    case LOAD_DATA_FAILURE: {
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
