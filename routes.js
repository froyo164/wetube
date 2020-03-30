// 어디에서든 이 url 을 불러다 쓸 것
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
//이상 global route 들

//이하 Users

const USERS = "/users";
const USER_DETAIL = "/:id"; //express 가 알아서 id 는 변수임을 확인함 (:id)
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//이하 Videos

//Users와 Videos 에 관한 2개의 controller 가 필요함

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO
};

export default routes;
