import express from "express";

const userRouter = express.Router(); //userRouter 을 export함 (default 로 하지 않음)

export default userRouter;
/*
userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
*/
// router는 많은 route들이 담긴 파일임

//MVC, MODEL(DATA), VIEW(HOW DOES THE DATA LOOK), CONTROL(FUNCTION THAT LOOKS FOR DATA)
//URL 과 FUNCTION을 분리
