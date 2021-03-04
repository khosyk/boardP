import React,{useState} from 'react';
import styled from 'styled-components';

const MainBlock = styled('div')`
width:75%;
padding:0.5%;
margin-left:11.5%;
margin-top:20px;
opacity:0.9;
background-color:rgba(255,255,255,0.9);
height:46rem;
border-bottom-left-radius:5px;
border-top-right-radius:5px;
box-shadow:1.5px 2px 0px 2px rgba(1,1,1,0.1);
  @media (max-width: 900px) {
    box-sizing:border-box;
    height:100rem;
    background-color:none;
    border:none;
    box-shadow:none;
  }

`;


const Thead = styled.div`
width:100%;
height:25px;
align-items:center;
font-size:1.2rem;
font-weight:500;
border-bottom:1px solid rgba(1,1,1,0.5);
`

const Tbody = styled.div`
height:92%;
border-bottom:1px solid rgba(1,1,1,0.5);
`

const Tlist = styled.ul`
width:100%;
height:100%;
`

const TContent = styled.li`

width:100%;
border-bottom:1px solid rgba(1,1,1,0.2);
`

const TFooter = styled.div`
width:100%;
height:25px;
align-items:center;
padding-top:7px;
font-size:1rem;
`

export default function Issue()
{

  return(
  
  <MainBlock>
        <Thead>
          hello
        </Thead>
        <Tbody>
          body
          <Tlist>
          <TContent>

          </TContent>
          </Tlist>
        </Tbody>
      <TFooter>
        foot
      </TFooter>
  </MainBlock>
  
  );
};

