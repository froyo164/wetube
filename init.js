//init.js 에 application 을 호출, app object 을 init.js 에 줘야 됨 (SHARE) (ES6, 같은 페이지 안에서 가능, 그전에 import 들은 node_module 안에서 불러왔슴)
//export default app 을 app.js 에서 해줌
//"start": "nodemon --exec babel-node init.js --delay 2" 로 수정 (index.js 의 이름을 바꾸엇기 때문에)
import app from "./app";

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
