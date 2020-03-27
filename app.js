import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//express 의 router 는 route 드의 복잡함을 쪼개주는데 사용 가능
//import { userRouter } from "./routers/userRouter"; // default 로 export 되지 않은 것은 이런식으로 import 해야 됨
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

//const handleHome = (req, res) => res.send("Hello from my ass");
//const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter); //globalRouter 에서는 /join, /search 등 을 다룸
app.use("/user", userRouter);
app.use("/video", videoRouter);

//app.get("/", handleHome);
//app.get("/profile", handleProfile);

//app.use("/user", userRouter); // use 는 누군가 /user 경로에 접속하면 이 userRouter 전체를 사용하겠다는 의미
/*
userRouter.get("/", (req, res) => res.send("user index")); /user
userRouter.get("/edit", (req, res) => res.send("user edit")); /user/edit
userRouter.get("/password", (req, res) => res.send("user password")); /user/password
*/

export default app; // 누군가 내 파일을 불러올 때 (import) , app object 를 줌
//app object는 위의 우리가 설정한 위의 것 들
//만약 default 로 export를 하면 //import app from "./app"; 이런식으로 import 함
