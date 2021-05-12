  
import React, { FC } from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset'
import { TopBar } from '../src/Components/TopBar/TopBar';
import { LeftMenu } from '../src/Components/LeftMenu/LeftMenu';
import { MainPage } from '../src/Components/MainPage/MainPage';
import { TestSite } from '../src/Components/TestSite/TestSite';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Page =styled.div`
    background-color: lightgrey;
    height: auto;
    font-family: Tahoma;
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
              
                <Switch>
                    <Route path="/TestSite" exact>
                      <TestSite/>
                    </Route>

                    <Route path="/MainPage" exact>
                      <MainPage/>
                    </Route>


                </Switch>

              
            </LeftAndMainPage>

          
      </Page>
    </Router>
    </>
  )
}

export default App;