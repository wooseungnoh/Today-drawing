# Today-drawing
매일매일 새로운 주제가 주어지고 그 주제에 맞는 그림을 그리거나 찍어서 올리는 서비스

# back
node.js 기반으로 express 를 이용하여 API서버를 구성하였습니다.
회원가입은 passport 를 이용하였습니다. passport 에서 지원하는 소셜 로그인 기능은 사이트배포 후 추가 예정입니다.
db는 mongoDB로 DB관리, 실제 파일은 aws S3 에 업로드 됩니다.

# front
react(next.js) 기반으로 구성하였습니다.
redux 를 이용하여 state 를 관리하고 비동기 작업을 수월하게 하기 위하여 redux-saga 를 도입했습니다.
레이아웃은 styled-component 를 이용하여 작업하였습니다.
