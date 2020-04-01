import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";

const userRouter = express.Router(); //userRouter 을 export함 (default 로 하지 않음)

//userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile); // 더 위에 있으니까 먼저 인식
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;

/*
userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
*/
// router는 많은 route들이 담긴 파일임

//MVC, MODEL(DATA), VIEW(HOW DOES THE DATA LOOK), CONTROL(FUNCTION THAT LOOKS FOR DATA)
//URL 과 FUNCTION을 분리
