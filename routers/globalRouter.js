import express from "express";

const globalRouter = express.Router(); //userRouter 을 export함 (default 로 하지 않음)
// 유일하게 독점적으로 url 을 다루는 법
export default globalRouter;
