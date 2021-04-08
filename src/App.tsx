  
import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../src/Components/TopBar/TopBar';
import { LeftMenu } from '../src/Components/LeftMenu/LeftMenu';

const TestStyled = styled.div`

`;


const App: FC = () => {
  return (
      <TestStyled>
        <TopBar></TopBar>
        <LeftMenu></LeftMenu>
      </TestStyled>
  )

}

export default App;