import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//express 의 router 는 route 드의 복잡함을 쪼개주는데 사용 가능
//import { userRouter } from "./routers/userRouter"; // default 로 export 되지 않은 것은 이런식으로 import 해야 됨
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

//const handleHome = (req, res) => res.send("Hello from my ass");
//const handleProfile = (req, res) => res.send("You are on my profile");

app.use(helmet());
app.set("view engine", "pug"); //Pug와 express에는 view 파일들의 위치에 관한 기본 설정이 있음
/*
view engine

String	The default engine extension to use when omitted.
NOTE: Sub-apps will inherit the value of this setting.

N/A (undefined)
*/
/*
views
String or Array	A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array.	
process.cwd() + '/views' // html 파일을 저장해야 하는 폴더의 기본 값은 프로젝트의 작업 디렉토리 + /views
*/
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);
//미들웨어, local 변수를 global 변수로 사용하도록 만들어주는 것, local 기능을 통해 변수에 접근할 수 있음

app.use(routes.home, globalRouter); //globalRouter 에서는 /join, /search 등 을 다룸
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

//app.use("/", globalRouter); //globalRouter 에서는 /join, /search 등 을 다룸
//app.use("/users", userRouter);
//app.use("/videos", videoRouter);

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

//app.set(name, valie) 어플리케이션을 설정하는 함수, 우리는 view engine 설정을 바꿀것임, 기본값은 undefined
//view engine 설정값을 pug으로 바꿀꺼임. app.set에 view engine을 복사-붙여넣기

// npm install pug, pug는 html 파일들이 더 아름답게 보이도록 만들어줌
