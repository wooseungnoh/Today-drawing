export const initialState = {
  // 갤러리에 뿌려질 포스트가 담길 배열
  postList: [],

  // 드로잉 화면에서 askUploadModal 창을 띄울 state
  modalState: false,

  // 미리보기 이미지가 들어갔는가를 검사하기 위한 state (사진 미 추가시 업로드 제한)
  addingPhoto: false,

  // true = 로딩 화면을 띄움
  isLoadding: false,

  // 미리보기 이미지 추가
  imagePaths: [],

  // 업로딩 완료시 true 로 바뀌고 갤러리로 Route.push
  isUploadingPost: false,

  // 지금 보고있는 포스트의 정보가 담김
  nowShowingPost: null,

  // 포스트 수정이 완료되었는가
  editingSuccess: false,

  // 포스트 삭제가 되면 갤러리로 푸쉬
  deletePostSuccess: false,

  //좋아요 상태
  like: false,

  word: '단어 불러오는 중',

  // 지난날의 단어를 불러옴
  oldWordList: [],

  // 갤러리의 주제 선택메뉴
  popSubjectMenu: false,

  // 중복클릭 방지
  MultipleClickState: true,

  // 모바일 버전의 글로벌메뉴 온 오프
  globalMenu: false,

  // 선택된 단어 보여줌
  selectedWord: '',
};

// 글로벌 메뉴 온오프
export const OPEN_GLOBAL_MENU = 'OPEN_GLOBAL_MENU';
export const CLOSE_GLOBAL_MENU = 'CLOSE_GLOBAL_MENU';

// 중복클릭방지
export const DONOT_DUPLICATION_ON = 'DONOT_DUPLICATION_ON';
export const DONOT_DUPLICATION_OFF = 'DONOT_DUPLICATION_OFF';

// 주제목록 열고 닫기
export const OPEN_SUBJECT_MENU = 'OPEN_SUBJECT_MENU';
export const CLOSE_SUBJECT_MENU = 'CLOSE_SUBJECT_MENU';

// 갤러리 포스트 불러오기
export const LOAD_GALLERY_REQUEST = 'LOAD_GALLERY_REQUEST';
export const LOAD_GALLERY_SUCCESS = 'LOAD_GALLERY_SUCCESS';
export const LOAD_GALLERY_FAILURE = 'LOAD_GALLERY_FAILURE';

// 모달창 온오프(방금 그린 그림 업로드 하겠습니까?)
export const MODAL_ON = 'MODAL_ON';
export const MODAL_OFF = 'MODAL_OFF';

// 미리보기 이미지 삭제
export const DELETE_PHOTO = 'DELETE_PHOTO';

// 이미지 업로드(미리보기 이미지)
export const UPPLOAD_CANVAS_REQUEST = 'UPPLOAD_CANVAS_REQUEST';
export const UPPLOAD_CANVAS_SUCCESS = 'UPPLOAD_CANVAS_SUCCESS';
export const UPPLOAD_CANVAS_FAILURE = 'UPPLOAD_CANVAS_FAILURE';

// 실제 포스트 업로드
export const UPPLOAD_POST_REQUEST = 'UPPLOAD_POST_REQUEST';
export const UPPLOAD_POST_SUCCESS = 'UPPLOAD_POST_SUCCESS';
export const UPPLOAD_POST_FAILURE = 'UPPLOAD_POST_FAILURE';

// 모든 업로드를 마치면 갤러리로 push 하기 위함
export const UPPLOADING_DONE = 'UPPLOADING_DONE';

// 포스트 상세페이지 로드
export const LOAD_POST_DETAIL_REQUEST = 'LOAD_POST_DETAIL_REQUEST';
export const LOAD_POST_DETAIL_SUCCESS = 'LOAD_POST_DETAIL_SUCCESS';
export const LOAD_POST_DETAIL_FAILURE = 'LOAD_POST_DETAIL_FAILURE';

// 포스트 상세페이지 정보수정
export const EDIT_POST_DETAIL_REQUEST = 'EDIT_POST_DETAIL_REQUEST';
export const EDIT_POST_DETAIL_SUCCESS = 'EDIT_POST_DETAIL_SUCCESS';
export const EDIT_POST_DETAIL_FAILURE = 'EDIT_POST_DETAIL_FAILURE';

// 포스트 지우기
export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

// 포스트 삭제 상태를 false 로 다시 바꿈(갤러리로 push)
export const DELETE_STATE_OFF = 'DELETE_STATE_OFF';

// 좋아요
export const LIKE_REQUEST = 'LIKE_REQUEST';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const LIKE_FAILURE = 'LIKE_FAILURE';
export const LIKE_ON = 'LIKE_ON';

// 좋아요 취소
export const UNLIKE_REQUEST = 'UNLIKE_REQUEST';
export const UNLIKE_SUCCESS = 'UNLIKE_SUCCESS';
export const UNLIKE_FAILURE = 'UNLIKE_FAILURE';

// 단어 불러오기
export const WORD_LOAD_REQUEST = 'WORD_LOAD_REQUEST';
export const WORD_LOAD_SUCCESS = 'WORD_LOAD_SUCCESS';
export const WORD_LOAD_FAILURE = 'WORD_LOAD_FAILURE';

// 선택된 주제의 포스트 불러오기
export const LOAD_SELECT_POST_REQUEST = 'LOAD_SELECT_POST_REQUEST';
export const LOAD_SELECT_POST_SUCCESS = 'LOAD_SELECT_POST_SUCCESS';
export const LOAD_SELECT_POST_FAILURE = 'LOAD_SELECT_POST_FAILURE';

// 단어 추가하기
export const ADD_WORD = 'ADD_WORD';

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_GLOBAL_MENU: {
      return {
        ...state,
        globalMenu: true,
      };
    }
    case CLOSE_GLOBAL_MENU: {
      return {
        ...state,
        globalMenu: false,
      };
    }
    case DONOT_DUPLICATION_ON: {
      return {
        ...state,
        MultipleClickState: false,
      };
    }
    case DONOT_DUPLICATION_OFF: {
      return {
        ...state,
        MultipleClickState: true,
      };
    }
    case OPEN_SUBJECT_MENU: {
      return {
        ...state,
        popSubjectMenu: true,
      };
    }
    case CLOSE_SUBJECT_MENU: {
      return {
        ...state,
        popSubjectMenu: false,
      };
    }
    case LOAD_SELECT_POST_REQUEST: {
      return {
        ...state,
        postList: null,
        isLoadding: true,
      };
    }
    case LOAD_SELECT_POST_SUCCESS: {
      return {
        ...state,
        postList: [...action.data.postList],
        isLoadding: false,
        selectedWord: action.data.selectedWord,
      };
    }
    case LOAD_SELECT_POST_FAILURE: {
      return {
        ...state,
        isLoadding: false,
      };
    }
    case ADD_WORD: {
      return {
        ...state,
      };
    }
    case WORD_LOAD_REQUEST: {
      return {
        ...state,
      };
    }
    case WORD_LOAD_SUCCESS: {
      return {
        ...state,
        word: action.data.word,
        oldWordList: action.data.oldWordList,
      };
    }
    case WORD_LOAD_FAILURE: {
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
        isLoadding: true,
      };
    }
    case LOAD_POST_DETAIL_SUCCESS: {
      return {
        ...state,
        isLoadding: false,
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
        postList: action.data.postList,
        isLoadding: false,
        selectedWord: action.data.todayWord,
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
