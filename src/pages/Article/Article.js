import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArticleBlock = styled.div`
  width: 100%;
  border-radius: 2px;
  margin-right: 20px;
  min-width: 280px;
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
  @media (min-width: 769px) {
    width: 46%;
    min-width: 280px;
    max-width: 340px;
    max-height: 241.6px;
    margin-bottom: 3rem;
    &:first-child {
    }
  }
  @media (min-width: 1360px) {
  }
`;

const LinkBlock = styled.div`
`;

const ImgStyle = styled.div`
  background-color: white;
  padding-top: 55%;
  width: 100%;
  position: relative;
`;

const ContentImg = styled.img`
  border-radius: 3px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  position: absolute;
  top: -1px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const RandomSpanPosition = styled.div`
  position: relative;
  top:-90px;
  right:-20px;
  font-weight: 800;
  font-size:1.2rem;
  color:white;
  width:88%;
  text-shadow: 1px 1px #868e96;
  word-break: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextBlock = styled.div`
  background-color: white;
  height: 2.5rem;
  padding: 0.5rem;
`;

const Title = styled.div`
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-weight: 600;
  word-break: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoBlock = styled.div`
  background-color: white;
  border-top: 1px solid silver;
  font-size: 0.8rem;
  width: 100%;
  height: 1.6rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const InfoLeft = styled.div`
  display: flex;
  align-content: center;
  flex: 1 50%;
`;

const Writer = styled.div`

`;

const InfoRight = styled.div`
  display: flex;
  flex: 1 50%;
  justify-content: flex-end;
`;




export default function Article({ resumeData}) {
  const { title, user, img, link } = resumeData;
  
  const randomBackground = useMemo(() => {
		var backgroundColor = [
			"#91a7ff",
			"#9775fa",
      "#66d9e8",
      "#63e6be",
      "#8ce99a",
      "#a9e34b",
      "#ffd43b",
      "#ffa94d"
		];
		var number = Math.floor(Math.random() * 7 + 1);
		return backgroundColor[number];
	}, []);

  return (
    <ArticleBlock>
      <LinkBlock>
        <Link to={link}> {img ?
          <ImgStyle><ContentImg alt={img} src={img} /> </ImgStyle> :
          <div style={{ backgroundColor: `${ randomBackground }`,paddingTop:'49%', }}>
            <RandomSpanPosition>{title}</RandomSpanPosition>
          </div>}
        </Link>
        <TextBlock>
          <Title><Link to={link}><span>{title}</span></Link></Title>
        </TextBlock>
      </LinkBlock>
      <InfoBlock>
        <InfoLeft>
          <Writer>
            from.<Link to={link}> {user}</Link>
          </Writer>
        </InfoLeft>
        <InfoRight>{new Date().toLocaleDateString()}</InfoRight>
      </InfoBlock>
    </ArticleBlock>
  );
}
