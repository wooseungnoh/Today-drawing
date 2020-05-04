export const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  isSignedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpErrorReason: '', // 회원가입 실패 사유
  me: null, // 내 정보
  isUserLoadding: false,
  editing: false,
};

const dummyUser = {
  id: 1,
  nickName: '노우승',
  userInfo: '안녕하세요 노우승입니다.',
  photo: [],
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';

export const EDITING_PROFILE_REQUEST = 'EDITING_PROFILE_REQUEST';
export const EDITING_PROFILE_SUCCESS = 'EDITING_PROFILE_SUCCESS';
export const EDITING_PROFILE_FAILURE = 'EDITING_PROFILE_FAILURE';

export const EDITING_PROFILE_OFF = 'EDITING_PROFILE_OFF';

export default (state = initialState, action) => {
  switch (action.type) {
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
        me: dummyUser,
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
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
        me: dummyUser,
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
    default: {
      return {
        ...state,
      };
    }
  }
};
