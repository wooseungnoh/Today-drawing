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

export const EDITING_ROLE_REQUEST = 'EDITING_ROLE_REQUEST';
export const EDITING_ROLE_SUCCESS = 'EDITING_ROLE_SUCCESS';
export const EDITING_ROLE_FAILURE = 'EDITING_ROLE_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case EDITING_ROLE_REQUEST:
    case REMOVE_POST_REQUEST:
    case REMOVE_USER_DATA_REQUEST:
    case LOAD_DATA_REQUEST: {
      return {
        ...state,
      };
    }
    case EDITING_ROLE_SUCCESS: {
      return {
        ...state,
        user: [...action.data],
      };
    }
    case REMOVE_POST_SUCCESS: {
      return {
        ...state,
        post: action.data,
      };
    }
    case REMOVE_USER_DATA_SUCCESS: {
      return {
        ...state,
        user: action.data,
      };
    }
    case LOAD_DATA_SUCCESS: {
      return {
        ...state,
        user: [...action.data.user],
        post: [...action.data.post],
      };
    }
    case EDITING_ROLE_FAILURE:
    case REMOVE_POST_FAILURE:
    case REMOVE_USER_DATA_FAILURE:
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
