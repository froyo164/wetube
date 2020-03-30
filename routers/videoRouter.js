import express from "express";
import routes from "../routes";
import {
  videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();

//videoRouter.get(routes.videos, videos); // 2번째 인자 구조에서 자유로워지기 위해 controller를 사용 할 차례
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

//export const videoRouter = express.Router(); 는 이 변수만 export 한다는 것
export default videoRouter; //export default 는 파일로 export 한다는 것
