//global
const LOGIN = '/login';
const LOGOUT = '/logout';
const SIGNUP = '/signup';
const EDITING = '/editing';
const LOAD = '/load';
const LOADLIKELIST = '/loadlikelist';

//photo
const PHOTO = '/photo';
const UPLOADPHOTO = '/uploadphoto';
const UPLOADPOST = '/uploadpost';
const LOADEDPOST = '/loaded';
const PHOTODETAIL = '/photodetail';
const EDITPOST = '/editpost';
const DELETEPOST = '/deletepost';
const LIKE = '/like';
const UNLIKE = '/unlike';
const LOADWORD = '/loadword'
const ADDWORD = '/addword'

const routes = {
  addword: ADDWORD,
  loadword: LOADWORD,
  login: LOGIN,
  logout: LOGOUT,
  signup: SIGNUP,
  editing: EDITING,
  load: LOAD,
  photo: PHOTO,
  uploadphoto: UPLOADPHOTO,
  uploadpost: UPLOADPOST,
  loadedpost: LOADEDPOST,
  photodetail: PHOTODETAIL,
  editpost: EDITPOST,
  deletepost: DELETEPOST,
  like: LIKE,
  loadlikelist: LOADLIKELIST,
  unlike: UNLIKE,
};

export default routes;
