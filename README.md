# README.md 에는 보통 노트들을 저장

# WeTube

Cloning Youtube with Vanila and Node JS

#

init.js 에는 app.js에서 import 한 application 이 있음, application 관련 코드 들은 app.js 파일에 담겨 있음
app.js 에서 express를 import 했고, express를 실행한 결과를 app 상수를 만들었음, 그리고 middleware들을 추가 했음. cookieParser는 cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어임. 사용자 인증 같은 곳에서 쿠키를 검사할 때 사용해야됨. bodyParser는 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어임. request 정보에서 form이나 json 형태로 된 body 를 검사함. 아바타의 사진이나 비디오를 업로드할 때, 제목이나 댓글같은 정보를 전달할 때 form에 담아서 업로드 . helmel 미들웨어는 application이 더 안전하도록 만들어줌. morgan 미들웨어에 역할은 application에서 발생하는 모든 일들을 logging 하는 것. 그리고 router 3개를 사용할것임. 그 중하나는 globalRouter인데, 이 안에는 /home, /search, /join, /login, /logout URL이 담겨 있슴. userRouter 안에는 /user/주소 들이 있음. 주소들은 모두 route.js에 정의 해둿음, 한 파일이 바뀌면 모두 적용되도록 할 수 있슴. videoRouter도 잇슴. 모든 router의 로직들은 모두 userController와 videoController에 정의 되어있슴
