import styled from 'styled-components';

//images
import Article from './MainArticle/Article';

const MainBlock = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: #f1f3f5;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const MainPosition = styled.div`
  margin-top: 2rem;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    width: 80%;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
  }
`;

const SidePosition = styled.div`
  position: sticky;
  width: 20%;
  min-width: 12rem;
  margin-top: 6rem;
  margin-bottom: auto;
  margin-right: 2%;
  background-color: white;
  border-radius: 3px;
  padding: 0.5rem;
  height: fit-content;
  max-width: 250px;
  @media (max-width: 930px) {
    display: none;
    visibility: hidden;
  }
`;

const RanksBlock = styled.div`
  background-color: white;
  width: 100%;
  height: 18.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

const RankBlock = styled.div`
  font-size: 0.9rem;
  line-height: 1.2rem;
  padding: 0.5rem;
`;
const RankTitle = styled.div`
  border-bottom: 1px solid grey;
  padding-bottom: 0.25rem;
  word-break: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Home() {
  return (
    <MainBlock>
      <MainPosition>
        <Article />
        <RanksBlock>
          <div style={{ borderBottom: '1px solid grey', padding: '0.5rem' }}>
            오늘 된글
          </div>
          <RankBlock>
            <RankTitle>
              1. 디아블로2 리저렉션 출시! 똥겜인가 갓겜인가?
            </RankTitle>
          </RankBlock>
        </RanksBlock>
      </MainPosition>
      <SidePosition>
        <div style={{ borderBottom: '1px solid grey', padding: '0.5rem' }}>
          셀프 QnA
        </div>
        <RankBlock>
          <RankTitle>1. 어떤 개발자가 되고 싶은지?</RankTitle>
        </RankBlock>
      </SidePosition>
    </MainBlock>
  );
}

export default Home;
