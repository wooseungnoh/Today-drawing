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
const LOADEDALLPOST = '/allloaded';
const PHOTODETAIL = '/photodetail';
const EDITPOST = '/editpost';
const DELETEPOST = '/deletepost';
const LIKE = '/like';
const UNLIKE = '/unlike';
const LOADWORD = '/loadword';
const ADDWORD = '/addword';
const SELECT = '/select';

//admin
const SECESSION = '/secession';
const REMOVEPOST = '/removepost';
const LOADLIST = '/loadlist';
const EDITROLE = '/editrole';

const routes = {
  editrole:EDITROLE,
  removepost: REMOVEPOST,
  select: SELECT,
  loadlist: LOADLIST,
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
  secession: SECESSION,
};

export default routes;
