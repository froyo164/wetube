export const videos = [
  {
    id: 373737,
    title: "Video awesome",
    description: "This is something I love",
    views: 24,
    videoFile:
      "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4", //html video mdn 로 비디오 데모를 볼 수 있음
    creater: {
      id: 121212,
      name: "Yunsoo Jung",
      email: "qwerss1@naver.com"
    }
  },
  // 임시 데이터를 만들어서 테스트 해봄, video 의 array
  // 다하면 videoController의 home 에서 video 목록을 받아서 render함수에 전달
  {
    id: 121212,
    title: "Video super",
    description: "This is something I love",
    views: 24,
    videoFile:
      "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4", //html video mdn 로 비디오 데모를 볼 수 있음
    creater: {
      id: 121212,
      name: "Yunsoo Jung",
      email: "qwerss1@naver.com"
    }
  },
  {
    id: 555555,
    title: "Video nice",
    description: "This is something I love",
    views: 24,
    videoFile:
      "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4", //html video mdn 로 비디오 데모를 볼 수 있음
    creater: {
      id: 121212,
      name: "Yunsoo Jung",
      email: "qwerss1@naver.com"
    }
  },
  {
    id: 111111,
    title: "Video perfect",
    description: "This is something I love",
    views: 24,
    videoFile:
      "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4", //html video mdn 로 비디오 데모를 볼 수 있음
    creater: {
      id: 121212,
      name: "Yunsoo Jung",
      email: "qwerss1@naver.com"
    }
  }
]; // 이제 home 화면에서 이 비디오 4개를 보여줌
