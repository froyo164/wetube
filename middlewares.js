import routes from "./routes";
/*
res.locals
An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any). Otherwise, this property is identical to app.locals.

This property is useful for exposing request-level information such as the request path name, authenticated user, user settings, and so on.

app.use(function (req, res, next) {
  res.locals.user = req.user
  res.locals.authenticated = !req.user.anonymous
  next()
})
*/
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  // locals. 옆에 있는건 변수명 처럼 존재 함
  res.locals.routes = routes; // 이제 partials/header 에서 # 대신에 routes 를 쓸 수 있음
  next(); //다음 함수로 넘어가게 함
};
// locals는 로컬 변수 응답을 포함하는 객체, 이 프로퍼티는 유용한 정보를 내보내는 데 유용함
// 전역적으로(글로벌) 사용할 수 있는 변수를 추가하는 방법을 알아봤음, 모든 템플릿에서 사용 할수 있음
// 템플릿, 뷰, 모든 곳에서 사용 가능함
