# myblog api-spec
myblog의 api문서입니다.

- `GET /api/visitor` : 방문자 API. option이 true일경우 방문자 수를 응답한다 false일경우 방문자 수를 한명 늘린다. 
  - Request Header : option
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : daily,monthly,all

- `GET /api/notice` : 공지사항 API. 공지사항의 제목과 공지사항post로 가는 url을 array형태로 응답한다. 
  - Request Header : X
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : name,url

- `GET /api/popular` : 인기글 API. 인기글의 제목과 인기글post로 가는 url을 array형태로 응답한다. 
  - Request Header : X
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : name,url 

- `POST /api/tags` : 태그 API. post 고유 id를 줄경우 사용된 태그를 array형태로 응답한다 아무 id도 넣지 않을 경우 이제까지 사용된 모든 태그를 응답한다. 
  - Request Header : X
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : name,url 

- `POST /api/post_intro` : 미리보기 API. post 고유 id를 줄경우 이미지와 제목, 수정 날짜, 내용을 응답한다. 
  - Request Header : id
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : img,name,date,contents



- `POST /api/post` : 포스트 API. post 고유 id를 줄경우 배열형 이미지, 제목, 수정 날짜, 문단별로 split된 내용을 응답한다. 
  - Request Header : id
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : img,name,date,contents

- `GET /api/view` : 조회수 API. option이 true일경우 조회 수를 응답한다 false일경우 조회 수를 한명 늘린다. 
  - Request Header : option
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : all, daily

- `POST /api/comment` : 댓글 API. comment변수에 내용이 들어가 있을 경우 db에 올린다. 
  - Request Header : option
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : all, daily

- `POST /api/love` : 좋아요 API. comment변수에 option이 true일경우 좋아요 수를 응답한다 false일경우 좋아요 수를 한명 늘린다. 
  - Request Header : option
  - Params : X
  - Request Body : X
  - Success Code : X
  - Response Header : X
  - Response Body : love