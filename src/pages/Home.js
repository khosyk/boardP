import styled from 'styled-components';
import Article from './Article/Article';
import Loader from './Loader';

//images

const MainBlock = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MainPosition = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainAriticleBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin: 0px;
  }
  @media (min-width: 1201px) {
    justify-content: space-evenly;
  }
`;

function Home({ mainData }) {
  return (<>
    {mainData ?<MainBlock>
      <MainPosition>
        <MainAriticleBlock>
          {mainData.map((mainData, index) => (
            <Article key={index} mainData={mainData} />
          ))}
        </MainAriticleBlock>
      </MainPosition>
    </MainBlock> : <Loader/>
   }
    </>
    );
}

export default Home;
