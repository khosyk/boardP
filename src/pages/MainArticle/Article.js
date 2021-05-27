import React from 'react';
import styled from 'styled-components';

const ArticleBlock = styled.div`
  width: 100%;
  border-radius: 2px;
  margin-right: 20px;

  min-width: 280px;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  @media (min-width: 769px) {
    width: 46%;
    min-width: 280px;
    max-width: 320px;
    max-height: 241.6px;
    margin-bottom: 1rem;
    &:first-child {
    }
  }
  @media (min-width: 1360px) {
  }
`;

const LinkBlock = styled.div``;

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

const Writer = styled.div``;

const InfoRight = styled.div`
  display: flex;
  flex: 1 50%;
  justify-content: flex-end;
`;

export default function Article({ title, user, date, img }) {
  return (
    <ArticleBlock>
      <LinkBlock to="/">
        <ImgStyle>
          <div></div>
        </ImgStyle>
        <TextBlock>
          <Title>디아블로2 리저렉션 출시! 똥겜인가 갓겜인가?</Title>
        </TextBlock>
      </LinkBlock>
      <InfoBlock>
        <InfoLeft>
          <Writer>
            from.<a to=""> WAITINGDIA</a>
          </Writer>
        </InfoLeft>
        <InfoRight>{new Date().toLocaleDateString()}</InfoRight>
      </InfoBlock>
    </ArticleBlock>
  );
}
