export const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  isSignedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpErrorReason: '', // 회원가입 실패 사유
  me: null, // 내 정보
  isUserLoadding: false,
  editing: false,
  likeList: [],
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_REQUEST';

export const EDITING_PROFILE_REQUEST = 'EDITING_PROFILE_REQUEST';
export const EDITING_PROFILE_SUCCESS = 'EDITING_PROFILE_SUCCESS';
export const EDITING_PROFILE_FAILURE = 'EDITING_PROFILE_FAILURE';

export const EDITING_PROFILE_OFF = 'EDITING_PROFILE_OFF';
export const EDITING_PROFILE_ON = 'EDITING_PROFILE_ON';

export const LOAD_LIKELIST_REQUEST = 'LOAD_LIKELIST_REQUEST';
export const LOAD_LIKELIST_SUCCESS = 'LOAD_LIKELIST_SUCCESS';
export const LOAD_LIKELIST_FAILURE = 'LOAD_LIKELIST_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LIKELIST_REQUEST: {
      return {
        ...state,
      };
    }
    case LOAD_LIKELIST_SUCCESS: {
      return {
        ...state,
        likeList: action.data,
      };
    }
    case LOAD_LIKELIST_FAILURE: {
      return {
        ...state,
      };
    }
    case LOAD_USER_REQUEST: {
      return {
        ...state,
      };
    }
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    }
    case LOAD_USER_FAILURE: {
      return {
        ...state,
      };
    }
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
        isUserLoadding: true,
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        isUserLoadding: false,
        me: action.data,
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggedIn: false,
        isUserLoadding:false,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        me: null,
        isLoggedIn: false,
      };
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        isUserLoadding: true,
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isSigningUp: true,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isUserLoadding: false,
        me: action.data,
        editing: true,
      };
    }
    case EDITING_PROFILE_REQUEST: {
      return {
        ...state,
        isUserLoadding: true,
      };
    }
    case EDITING_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        editing: false,
        isUserLoadding: false,
        me: action.data,
      };
    }
    case EDITING_PROFILE_FAILURE: {
      return {
        ...state,
      };
    }
    case EDITING_PROFILE_OFF: {
      return {
        ...state,
        editing: false,
        isUserLoadding: false,
      };
    }
    case EDITING_PROFILE_ON: {
      return {
        ...state,
        editing: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
