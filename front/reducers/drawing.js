export const initialState = {
  photo: [
    {
      id: 1,
      creater: '개',
      Img:
        'https://us.123rf.com/450wm/bigandt/bigandt1408/bigandt140800118/30980522-%EC%95%BC%EC%99%B8%EC%97%90%EC%84%9C-%EB%A7%91%EC%9D%80-%EB%82%A0%EC%97%90-7-%EC%A3%BC-%EC%98%A4%EB%9E%98-%EB%90%9C-%EA%B3%A8%EB%93%A0-%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84-%EA%B0%95%EC%95%84%EC%A7%80-.jpg?ver=6',
      description: '강아지입니다.',
      title: '강아지',
      createAt: '2020.10.03',
    },
    {
      id: 2,
      creater: 'wooseung',
      Img:
        'https://cdn.clien.net/web/api/file/F01/8943891/37854b4f3dc856.png?w=780&h=30000&gif=true',
      description: '이 그림은 그냥 그려본 그림입니다.',
      title: '고먐미',
      createAt: '2020.10.03',
    },
  ],
  modalState: false,
  addingPhoto: false,
};

const dummyPhoto = {
  id: 2,
  creater: '더미',
  Img:
    'https://cdn.clien.net/web/api/file/F01/8943891/37854b4f3dc856.png?w=780&h=30000&gif=true',
  description: '더미 그림',
  title: '더미더미',
  createAt: '2020.10.03',
};

export const LOAD_GALLERY_POST = 'LOAD_GALLERY_POST';
export const MODAL_ON = 'MODAL_ON';
export const MODAL_OFF = 'MODAL_OFF';

export const ADDING_PHOTO_OFF = 'ADDING_PHOTO_OFF';

export const UPPLOAD_CANVAS_REQUEST = 'UPPLOAD_CANVAS_REQUEST';
export const UPPLOAD_CANVAS_SUCCESS = 'UPPLOAD_CANVAS_SUCCESS';
export const UPPLOAD_CANVAS_FAILURE = 'UPPLOAD_CANVAS_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GALLERY_POST: {
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
      };
    }
    case UPPLOAD_CANVAS_SUCCESS: {
      return {
        addingPhoto: true,
        photo: [dummyPhoto, ...state.photo],
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
    default: {
      return {
        ...state,
      };
    }
  }
};
