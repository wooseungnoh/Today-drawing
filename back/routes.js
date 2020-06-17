//global
const LOGIN = '/login';
const LOGOUT = '/logout';
const SIGNUP = '/signup';
const EDITING = '/editing';
const LOAD = '/load';
const LOADLIKELIST = '/loadlikelist';
const LOADUSERLIST = '/loaduserlist';

//photo
const PHOTO = '/photo';
const UPLOADPHOTO = '/uploadphoto';
const UPLOADPOST = '/uploadpost';
const LOADEDPOST = '/loaded';
const LOADEDALLPOST = '/allloaded';
const PHOTODETAIL = '/photodetail';
const EDITPOST = '/editpost';
const DELETEPOST = '/deletepost';
const LIKE = '/like';
const UNLIKE = '/unlike';
const LOADWORD = '/loadword';
const ADDWORD = '/addword';
const SELECT = '/select';

const routes = {
  select: SELECT,
  loaduserlist: LOADUSERLIST,
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
  loadedallpost: LOADEDALLPOST,
  photodetail: PHOTODETAIL,
  editpost: EDITPOST,
  deletepost: DELETEPOST,
  like: LIKE,
  loadlikelist: LOADLIKELIST,
  unlike: UNLIKE,
};

export default routes;
