import { videos } from "../db";

// videoController에 homeController를 추가 함
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
// render 함수의 인자로 템플릿 파일의 이름을 입력하면 됨, 두번쩨 인자는 템플릿에 추가 할 정보가 담긴 객체들임
// 이 함수가 view 폴더에서 파일명이 home 이고 확장자가 pug인 템플릿파일을 찾은후에 보여줌
//export const home = (req, res) => res.send("Home");
//home 화면에 접속하면 video 목록을 받아옴 ("home", { pageTitle: "Home", videos }), videos:videos 는 videos 로 줄일 수 있음

export const search = (req, res) => {
  //console.log(req.query); //console.log 를 해서 android (search by term 에 입력했던것) 를 찾음 (req.query 에 있음)
  // 출력: { term: 'android' }
  //console.log(req.query.term);
  const {
    query: { term: searchingBy } //term 의 이름은 searchingBy 로 바꿈
  } = req;
  // 이제 console.log(term); 가능
  //const searchingBy = req.query.term; 위와 같음
  res.render("search", {
    pageTitle: "Search",
    searchingBy: searchingBy,
    video
  });
}; // error 아님
//searchingBy 로 입력되는 값이 여기 위에 있는 searchingBy 의 값과 같다고 자동 인식
//search 화면 컨트롤러가 여기 있음. 이제는 암시적 리턴을 사용 할수 없음
//{} 을 사용해야 됨

/*
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });
  */
//export const videos = (req, res) => res.render("videos");

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });

//여기까지가 MVC 에서 C 파트임
/*
다음 비디오에서는 PUG 라는 걸 설치할것임, PUG는 express에서 VIEW를 다루는 방식 중 하나임
express로 HTML을 보여줄 수 있음. res.send 대신에, 실제 HTML을 전달할것임
CSS 같은 것들로 멋지게 꾸밀 수 있음. 그게 MVC에서 V 부분, C부분은 이미했고, PUG로 V부분도 할것
*/
