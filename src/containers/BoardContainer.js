import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router';
import config from '../config.json';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';

const BrdBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
	min-height: 750px;
`;

const BrdTitle = styled.input`
  margin-top: 20px;
  width: 70%;
  height: 30px;
  font-size: 1rem;
  border-radius: 2px;
  text-indent: 2px;
  background-color: rgba(255,255,255,0.8);
  border: 1px solid #757e86;
`;

const BrdToolbar = styled.div`
  display: flex;
  width: 70%;
  margin: 8px 0px;
`;

const BrdTextarea = styled.div`
  width: 70%;
  resize: vertical;
  padding: 10px;
  height: fit-content;
  min-height: 600px;
  font-size:14px;
  line-height: 16px;
  background-color: rgba(255,255,255,0.8);
  border: 1px solid #757e86;
  border-radius: 2px;
`;

const BrdBtnBlock = styled.div`
  display: flex;
  margin-top: 10px;
  width: 70%;
  justify-content: flex-end;
`;

const BrdBtn = styled.button`
  font-family: 'NanumBarunpenR';
  height: 1.5rem;
  width: 50px;
  font-size: 0.9rem;
  padding: 3px 2px;
  background-color: #f1f3f5;
  text-align: center;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid #ced4da;
  color: #343a40;
  &:hover {
    box-shadow: 0px 1px 1px black;
  }
  &:active {
    transform: translate(0px, 3%);
    box-shadow: 0px 0px 1px black;
  }
`;

function BoardContainer({ user, type }) {
  
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(['USID']);

  const checkCookie = () => {
    try {
      const token = cookies.USID;
      if (!token) {
        alert('로그인이 필요합니다.');
        history.push('/');
      }
    } catch (error) {
      alert(`From board : ${error}`)
    }
  }
  checkCookie();
  const [input, setInput] = useState({
    title: '',
    content: '',
    imagePath:''
  });

  const { content, title,imagePath } = input;

  const getValue = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const getInnerText = () => {
    const content = document.getElementById('textArea').innerHTML;
    setInput({
      ...input,
      content,
    });
  };

  const callSave = async (e) => {
    e.preventDefault();
    try {
      // userId 수정
      const url = `${config.host}/posts`;
      if (type === '') {
        type = 'issue'
      }
      const data = JSON.stringify({
        title,
        content,
        imagePath,
        userId: user.name,
        type
      });

      const options = {
        headers: { 'Content-Type': 'application/json' },
      };

      const result = await axios.post(url, data, options); // 담아라 = 선언해라

      const {
        data: { err, ok },
      } = result;

      if (!ok) {
        alert(`error : ${err}`);
        return false;
      }

      history.push({
        pathname: `/${type}/${result.data.id}`,
      });

      // HTTP 상태코드 200,201 성공 그외는 실패
    } catch (error) {
      alert(`error:${error}`);
      return false;
    }
    // setInput({ id: id + 1 }); //id값은 서버에서 생성한다. (재시작 리로드에서 변경될 수 있다.)
  };

  //admin 일떄만 수정 가능하게
  // image src 로 해당 이미지 사용하기,
  const textAreaRef = useRef(null);

  const uploadImage = async (e) => {
    try {
        const uri = `${config.host}/images`;
        const file = e.target.files[0];
        var targetDiv = document.getElementById("textArea");
        var targetImg = document.createElement("img");
        targetImg.setAttribute(
            "style",
            "max-width:400px",
            "position:relative",
            "padding:50px"
        ); //img 스타일 설정
        /*
      var reader = new FileReader(); // FilReader 설정 > 객체를 이용하여 업로드된 파일을 읽을 수 있다.
      targetDiv.append(targetImg); // textArea에 img 추가
      reader.addEventListener('load', function () {
        targetImg.src = reader.result;
      }); // FileReader 는 비동기라서 콜백 함수를 추가해준다. 여기선 img2의 src를 reader.resulet로 설정
      if (file) reader.readAsDataURL(file);
	  */

        //file의 정보를 담는다 -> 이미지 태그를 원하는 태그 안에 넣는다 ->파일리더가 데이터를 읽는다.(if부분) -> 파일리더를 선언하고 파일리더를 통해 img src를 정하고 ->
        const formData = new FormData();
        formData.append("image", file);

        /*
      위 두줄은
      <form>
				<input type="file" name="image" />
			</form>;
      */

        const configData = {
            headers: {
                "content-type": "multipart/form-data", //파일 데이터를 보내겠다.
            },
        };
        
        const result = await axios.post(uri, formData, configData);

        const {
            data: { ok, path },
        } = result;
        if (ok === false) {
            return;
        }
        targetImg.src = path;

        targetDiv.append(targetImg); // textArea에 img 추가

        setInput({ ...input, imagePath: path });
        // 이미지 업로드를 했으면 처음 업로드 한 이미지의 src를 imagePath에 담아서
        // post 저장할때 같이 보내라
    } catch (error) {
      alert(`Error from image upload:${error}`);
    }
    e.preventDefault();
  };

  return (
        <BrdBox>
              <BrdTitle
                    name="title"
                    type="text"
                    onChange={getValue}
                    placeholder="글 제목을 입력해주세요."
                    value={title}
              />
              <BrdToolbar>
                <input
                    type="file"
                    name="image"
                    id="imageData"
                    onChange={uploadImage}
                />
              </BrdToolbar>
              <BrdTextarea
                    id="textArea"
                    name="content"
                    onInput={getInnerText}
                    value={content}
                    placeholder="내용을입력해주세요."
                    ref={textAreaRef}
                    contentEditable="true"
              ></BrdTextarea>
              <BrdBtnBlock>
                    <BrdBtn onClick={callSave}>저장</BrdBtn>
              </BrdBtnBlock>
        </BrdBox>
  );
}


const mapStateToProps = (state) => {
	return {
    user: state.login.user,
    type: state.pages.type
	};
};

export default connect(mapStateToProps)(BoardContainer);