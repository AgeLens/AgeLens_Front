# AgeLens

> 이 프로젝트는 학교 인공지능 수업시간에 과제로 만든 프로젝트입니다.

## 😎얼굴 인식을 하여 몇 살 인지 보여주는 서비스😎
몇 살이니??

얼굴 인식을 하여 몇 살 인지 보여주는 서비스입니다!

## ⚙️사용 기술⚙️
React, React-Router, Styled-Component, TypeScript

## ℹ️설명
### 메인 페이지
<img style="width: 800px" src="https://github.com/AgeLens/AgeLens_Front/assets/102218665/8da739e0-8c22-4a63-a28e-8b5b2706496a" />

메인 페이지입니다.  
웹캠과 연결된 화면이 보이고 중앙에 동그란 버튼을 클릭하면 사진이 찍힙니다.

**카메라가 존재하지 않을 때**  

<img style="width: 800px" src="https://github.com/AgeLens/AgeLens_Front/assets/102218665/a94bfd00-e3b1-46bc-b2ce-4f9b195286c8" />

카메라가 존재하지 않으면 위와 같은 창이 뜹니다.  
카메라를 다시 연결 시킨 후 새로고침을 하면 화면이 뜹니다.

**사진 찍기**

<img style="width: 800px" src="https://github.com/AgeLens/AgeLens_Front/assets/102218665/1f0db807-dff7-4c15-b159-5115d6f34d10" />

사진을 찍으면 PopUp으로 화면이 뜹니다.  
서버에 요청을 보내 결과값을 받을 때까지 아래의 로딩바가 움직입니다.  
서버에서 결과값을 넘겨주면 "결과 보기"로 글자가 바뀐뒤 결과창으로 이동합니다.

### 결과 페이지
<img style="width: 800px" src="https://github.com/AgeLens/AgeLens_Front/assets/102218665/8356bbca-cc01-46f1-a328-943998d1fba8" />

결과 페이지입니다.
이 곳에서는 메인 페이지에서 받은 결과값을 props로 넘겨받아 보여주는 페이지입니다.

만약 인식이 잘 못 되었다면,  

<img style="width: 800px" src="https://github.com/AgeLens/AgeLens_Front/assets/102218665/045db788-42e7-4513-9f56-1db2149922ab" />

위와 같은 창이 뜨며, 돌아가기로 메인화면으로 다시 돌아갈 수 있습니다.

## 🧐느낀 점🧐
이번에 처음으로 프론트를 혼자서 해보았는데, 강의를 보며 거기에 추가/변경하는 것과는 차원이 다르다는 것을 깨달았습니다.
그리고 이번에 혼자 해보면서 모르는 것들을 많이 검색하면서 많은 정보를 얻었고, 또한 검색하는 노하우도 획득한 것 같습니다.
또한, 백엔드와 API통신을 주고 받으면서 http통신을 하기 위해 axios도 써보는 좋은 기회였습니다~!✨

아직 미숙하지만 성장했다!
