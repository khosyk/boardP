import React from 'react';
import styled from 'styled-components';

const MainBlock = styled('div')`
display:flex;
justify-content:center;
margin:20px 5%;
  @media (max-width: 768px) {
    margin:20px 3%;
  }
`;

const ArticleBlock = styled('article')`
width:95%;
height:73vh;
border:solid black 1px
`

export default function Movie() {
  return(
   
      <MainBlock>
        <ArticleBlock>
Movie    
        </ArticleBlock>
      </MainBlock>

  );
}

