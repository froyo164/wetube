import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router(); //userRouter 을 export함 (default 로 하지 않음)
// 유일하게 독점적으로 url 을 다루는 법

globalRouter.get(routes.home, home);
//globalRouter.get(routes.home, (req, res) => res.send("Home"));
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);
//export 한 함수들을 (from controller) router에서 import 해서 사용

export default globalRouter;

/*

function alalal (){
    return true;
}

alalal = () => {
    return true;
}

alalal = () => true
// {} 를 지우면 암시적 성격을 읽게 되서 return 을 적어줘야함

*/
