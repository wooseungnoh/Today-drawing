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
    {
      id: 3,
      creater: 'suna',
      Img:
        'https://cdn.pixabay.com/photo/2020/04/13/12/18/flower-5038110__340.jpg',
      description: '이 그림은 그냥 그려본 그림입니다.',
      title: '먐미',
      createAt: '2020.10.03',
    },
    {
      id: 4,
      creater: 'woo',
      Img:
        'https://helpx.adobe.com/content/dam/help/ko/photoshop/how-to/compositing/_jcr_content/main-pars/image/compositing_1408x792.jpg',
      description: '이 그림은 그냥 그려본 그림입니다.',
      title: '먐미',
      createAt: '2020.10.03',
    },
    {
      id: 5,
      creater: 'www',
      Img: 'https://pbs.twimg.com/media/DZwbCQRU8AAgYyp.jpg',
      description: '이 그림은 그냥 그려본 그림입니다.',
      title: '먐미',
      createAt: '2020.10.03',
    },
  ],
  modalState: false,
};

export const LOAD_GALLERY_POST = 'LOAD_GALLERY_POST';
export const MODAL_ON = 'MODAL_ON';
export const MODAL_OFF = 'MODAL_OFF';

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
    default: {
      return {
        ...state,
      };
    }
  }
};
