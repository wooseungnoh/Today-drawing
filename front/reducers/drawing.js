export const initialState = {
  postList: [],
  modalState: false,
  addingPhoto: false,
  isLoadding: false,
  imagePaths: [],
  isUploadingPost: false,
  nowShowingPost: null,
  editingSuccess: false,
  deletePostSuccess: false,
  like: false,
  word: 'undefined',
};

export const LOAD_GALLERY_REQUEST = 'LOAD_GALLERY_REQUEST';
export const LOAD_GALLERY_SUCCESS = 'LOAD_GALLERY_SUCCESS';
export const LOAD_GALLERY_FAILURE = 'LOAD_GALLERY_FAILURE';

export const MODAL_ON = 'MODAL_ON';
export const MODAL_OFF = 'MODAL_OFF';

export const ADDING_PHOTO_OFF = 'ADDING_PHOTO_OFF';

export const DELETE_PHOTO = 'DELETE_PHOTO';

export const UPPLOAD_CANVAS_REQUEST = 'UPPLOAD_CANVAS_REQUEST';
export const UPPLOAD_CANVAS_SUCCESS = 'UPPLOAD_CANVAS_SUCCESS';
export const UPPLOAD_CANVAS_FAILURE = 'UPPLOAD_CANVAS_FAILURE';

export const UPPLOAD_POST_REQUEST = 'UPPLOAD_POST_REQUEST';
export const UPPLOAD_POST_SUCCESS = 'UPPLOAD_POST_SUCCESS';
export const UPPLOAD_POST_FAILURE = 'UPPLOAD_POST_FAILURE';

export const UPPLOADING_DONE = 'UPPLOADING_DONE';

export const LOAD_POST_DETAIL_REQUEST = 'LOAD_POST_DETAIL_REQUEST';
export const LOAD_POST_DETAIL_SUCCESS = 'LOAD_POST_DETAIL_SUCCESS';
export const LOAD_POST_DETAIL_FAILURE = 'LOAD_POST_DETAIL_FAILURE';

export const EDIT_POST_DETAIL_REQUEST = 'EDIT_POST_DETAIL_REQUEST';
export const EDIT_POST_DETAIL_SUCCESS = 'EDIT_POST_DETAIL_SUCCESS';
export const EDIT_POST_DETAIL_FAILURE = 'EDIT_POST_DETAIL_FAILURE';

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const DELETE_STATE_OFF = 'DELETE_STATE_OFF';

export const LIKE_REQUEST = 'LIKE_REQUEST';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const LIKE_FAILURE = 'LIKE_FAILURE';
export const LIKE_ON = 'LIKE_ON';
export const UNLIKE_REQUEST = 'UNLIKE_REQUEST';
export const UNLIKE_SUCCESS = 'UNLIKE_SUCCESS';
export const UNLIKE_FAILURE = 'UNLIKE_FAILURE';

export const WORD_UPDATE_REQUEST = 'WORD_UPDATE_REQUEST';
export const WORD_UPDATE_SUCCESS = 'WORD_UPDATE_SUCCESS';
export const WORD_UPDATE_FAILURE = 'WORD_UPDATE_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case WORD_UPDATE_REQUEST: {
      return {
        ...state,
      };
    }
    case WORD_UPDATE_SUCCESS: {
      return {
        ...state,
        word: action.data,
      };
    }
    case WORD_UPDATE_FAILURE: {
      return {
        ...state,
      };
    }
    case LIKE_ON: {
      return {
        ...state,
        like: true,
      };
    }
    case LIKE_REQUEST: {
      return {
        ...state,
      };
    }
    case LIKE_SUCCESS: {
      return {
        ...state,
        like: true,
        nowShowingPost: action.data,
      };
    }
    case LIKE_FAILURE: {
      return {
        ...state,
      };
    }
    case UNLIKE_REQUEST: {
      return {
        ...state,
      };
    }
    case UNLIKE_SUCCESS: {
      return {
        ...state,
        like: false,
        nowShowingPost: action.data,
      };
    }
    case UNLIKE_FAILURE: {
      return {
        ...state,
      };
    }
    case DELETE_STATE_OFF: {
      return {
        ...state,
        deletePostSuccess: false,
      };
    }
    case DELETE_POST_REQUEST: {
      return {
        ...state,
        deletePostSuccess: false,
      };
    }
    case DELETE_POST_SUCCESS: {
      return {
        ...state,
        deletePostSuccess: true,
      };
    }
    case DELETE_POST_FAILURE: {
      return {
        ...state,
        deletePostSuccess: false,
      };
    }
    case EDIT_POST_DETAIL_REQUEST: {
      return {
        ...state,
        editingSuccess: false,
      };
    }
    case EDIT_POST_DETAIL_SUCCESS: {
      return {
        ...state,
        editingSuccess: true,
      };
    }
    case EDIT_POST_DETAIL_FAILURE: {
      return {
        ...state,
        editingSuccess: true,
      };
    }
    case LOAD_POST_DETAIL_REQUEST: {
      return {
        ...state,
      };
    }
    case LOAD_POST_DETAIL_SUCCESS: {
      return {
        ...state,
        nowShowingPost: action.data,
      };
    }
    case LOAD_POST_DETAIL_FAILURE: {
      return {
        ...state,
      };
    }
    case LOAD_GALLERY_REQUEST: {
      return {
        ...state,
        isLoadding: true,
      };
    }
    case LOAD_GALLERY_SUCCESS: {
      return {
        ...state,
        postList: action.data,
        isLoadding: false,
      };
    }
    case LOAD_GALLERY_FAILURE: {
      return {
        ...state,
        isLoadding: false,
      };
    }
    case MODAL_ON: {
      return {
        ...state,
        modalState: true,
      };
    }
    case MODAL_OFF: {
      return {
        ...state,
        modalState: false,
      };
    }
    case UPPLOAD_CANVAS_REQUEST: {
      return {
        ...state,
        isLoadding: true,
      };
    }
    case UPPLOAD_CANVAS_SUCCESS: {
      return {
        ...state,
        addingPhoto: true,
        isLoadding: false,
        imagePaths: [...state.imagePaths, action.data],
      };
    }
    case UPPLOAD_CANVAS_FAILURE: {
      return {
        ...state,
        addingPhoto: false,
      };
    }
    case ADDING_PHOTO_OFF: {
      return {
        ...state,
        addingPhoto: false,
      };
    }
    case DELETE_PHOTO: {
      return {
        ...state,
        imagePaths: [],
      };
    }
    case UPPLOAD_POST_REQUEST: {
      return {
        ...state,
        isUploadingPost: false,
      };
    }
    case UPPLOAD_POST_SUCCESS: {
      return {
        ...state,
        postList: [...state.postList, action.data],
        isUploadingPost: true,
      };
    }
    case UPPLOAD_POST_FAILURE: {
      return {
        ...state,
        isUploadingPost: false,
      };
    }
    case UPPLOADING_DONE: {
      return {
        ...state,
        isUploadingPost: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
