console.log("hi!");
//express 는 웹 및 모바일 애플리케이션을 위한 일련의 강력한 기능을 제공하는 간결하고 유연한 Node.js 웹 애플리케이션 프레임워크
//express 설치하는법: NPMJS (NODE PACKAGE MANAGER)
//NODE PACKAGE MANAGER, node.js 월드의 중심 which 각자의 package를 넣어 두는 (node.js 와 관련된 모든 것이 있슴)
//node.js 를 다운 받으면 npm 이 같이 다운로드 됨
//website 가 package임
// JSON 은 javascript 에서 정보를 담는 방식
// npm 을 실행 할 때는 꼭 프로젝트 폴더에 package.json 이 있는 폴더에서 실행해야만함
// 만약 다른 곳에서 실행시 pacakge.json을 다른 곳에서 만들어버름
// npm install express (express 설치)
// 설치하면 package-lock.json 이랑 node_modules 가 생김
// dependency 는 프로젝트가 생존하는 방식 "express": "^4.17.1" 이상
// index.js 에 어플리케이션을 만드는동안 node_modules 에서 필요 한 것을 찾음
// package.js 은 협업 할때 매우좋음 (협업자에서 node_modules 를 다 건네중 필요가 없음) package.js 과 그동안 만든 파일만 건네주면 됨
// 받은 사람은 npm install 만 하면 됨 (자동으로 dependencies 를 찾아서 download함)
// .gitignore 은 node_modules 를 무시하게 해줌 (코드만 업데이트 시켜줌)
// .gitignore 에 있는 것들 은 무시하게 해줌
