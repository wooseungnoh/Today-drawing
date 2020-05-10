export const initialState = {
  postList: [],
  modalState: false,
  addingPhoto: false,
  isLoadding: false,
  imagePaths: [],
  isUploadingPost: false,
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

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GALLERY_REQUEST: {
      return {
        ...state,
      };
    }
    case LOAD_GALLERY_SUCCESS: {
      return {
        ...state,
        postList: action.data,
      };
    }
    case LOAD_GALLERY_FAILURE: {
      return {
        ...state,
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
