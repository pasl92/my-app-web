  
import React, { FC } from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset'
import { TopBar } from '../src/Components/TopBar/TopBar';
import { LeftMenu } from '../src/Components/LeftMenu/LeftMenu';
import { MainPage } from '../src/Components/MainPage/MainPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Page =styled.div`
    background-color: lightgrey;
    height: auto;
`;

const LeftAndMainPage= styled.div`
    display: flex;
`;

const App: FC = () => {
  return (
    <>
    <Router>
      <Reset/>
        <Page>
          <TopBar></TopBar>
            <LeftAndMainPage>
              <LeftMenu></LeftMenu>
              <MainPage></MainPage>
            </LeftAndMainPage>

          <Switch>
            <Route path="/niemamjeszczestronki 1" exact>
              
            </Route>
            <Route path="/" exact>
              <div>Strona główna</div>
              <button >Kliknij mnie</button>
            </Route>

          </Switch>
      </Page>
    </Router>
    </>
  )
}

export default App;