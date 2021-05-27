## portfolio posting board

Profile page.

1. This project is made of
   [v]an singlePage
   [v]Responsive web (flex)
   [v]design for Mobile
   [v]module - Container - Presenter format
   [v]react-router
   [v]axios(for RESTful)
   [v]react Redux
   [v]Banners from photoshop
   [v]Hooks

2. the features of

[v]issue page //Lists of posts are showing here
-only admin can upload posts
-Load posts (by axios get)
-Search posts (by axios get with filter, includes method from Javascript)
-Pagenation (by axios get by getting Arrays from Server's currentPage and making list again pages by Algorithm)
-Move to the first list of posts (by axios get)

[v]board page //A post is uploaded here
-Do not use board api (because it's learning stage and I want to know the process)
-Get input's values and upload at the same time by axios post
-Can upload Image with div content-editable method
-Locate user after they click 'save'

[v]Login page // User can login here
-Welcome phrase :)
-id, password verification (by axios post)
-get token using useCookie(Hook)
-guide to Signin page with a button

[v]Signin page // User can sign in here
-text for guiding users what to put in inputs
-nickName and id(Email format) duplication check by regular expression and axios post
-password and password check inputs take functions to check if password is right format with regular expression and input tag's attribute
-signin button bring an user to main page('/')

3. will be added

- login with other methods (with Kakao, google id ,etc)
- password find
- list of weekly best and hottest posts

프로필 페이지

1.이 프로젝트는 다음이 포함되어있습니다.

[] 싱글페이지
[] 반응형 웹 디자인 (flex사용)
[] 모바일용 디자인
[] 모듈- 컨테이너 - 프레젠터 형식
[] 리액트라우터
[] 엑시오스
[] 리액트 리덕스 상태관리
[] 포토샵으로 만들어진 배너들
[] 훅들(Hooks)

2. 특징들

[]issue 페이지 // 게시물 리스트들이 보여집니다.

- 어드민만 게시물 작성 가능합니다.
- 포스트들이 로딩됩니다. (axios get을 사용합니다.)
- 게시물 검색이 가능합니다. (filter() 와 includes 를 사용하여 axios get 으로 얻어옵니다.)
- 페이지네이션 (페이지 스테이트를 이용하여, 최대 포스트 id를 계산하여 post를 통해 얻어옵니다.)
- 첫번째 게시물 리스트로 이동(axios get을 이용하여 첫번째 게시물 리스트로 이동합니다.)

[]board page //게시물 작성 페이지 -보드 api를 사용하지 않습니다.(아직 배우는 단계라, 원리를 알기위해 사용하지 않았습니다.) -인풋들의 값을 파악하고 인풋 값을 저장 버튼으로 한번에 axios post 합니다.
-img 업로드를 div 속성 content-editable을 사용해 가능하게 했습니다. -저장 버튼을 누르면 메인으로 이동합니다.

[]Login page // 유저가 로그인 하는 곳 -인사말, 인사는 중요합니다. -아이디 패스워드를 확인합니다.(axios post로 서버에 요청합니다.) -토큰을 사용합니다. -회원가입 버튼은 회원가입 페이지로 이동합니다.

[]회원가입 페이지 // 유저가 회원가입 하는 곳 -인풋들에 어떤내용을 작성해야하는지 안내하는 텍스트 -닉네임과 아이디(이메일 형식인지) 중복확인을 합니다. 중복 확인에는 정규 표현식과 axios post를 사용합니다. -패스워드 그리고 패스워드 확인 인풋들은 알맞은 형식인지 정규표현식 그리고 인풋 속성을 사용하여 패스워드를 확인합니다. -회원가입 버튼은 유저를 메인페이지로 이동시킵니다.

3. 다음을 추가 할 예정입니다.

- 다른 방법을 통한 로그인 (구글,카카오 계정 이용 등)
- 비밀번호 찾기
- 주간 베스트와 당일 베스트
