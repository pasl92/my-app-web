import React, { FC } from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset'
import { TopBar } from '../src/Components/TopBar/TopBar';
import { LeftMenu } from '../src/Components/LeftMenu/LeftMenu';
import { MainPage } from '../src/Components/MainPage/MainPage';
import { TestSite } from '../src/Components/TestSite/TestSite';
import { Entities } from '../src/Components/Entities/Entities';
import { WorkspacesSite } from '../src/Components/WorkspacesSite/WorkspacesSite';
import { Publications } from '../src/Components/Publications/Publications';
import { Users } from '../src/Components/Data/GetUsers';
import { MyProfile } from './Components/MyProfile/MyProfile';

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

                    <Route path="/Publications" exact>
                      <Publications/>
                    </Route>

                    <Route path="/MyProfile" exact>
                      <MyProfile/>
                    </Route>

                    <Route path="/Entities" exact>
                      <Entities/>
                    </Route>

                    <Route path="/WorkspacesSite" exact>
                      <WorkspacesSite/>
                    </Route>
                </Switch>
            </LeftAndMainPage>
      </Page>
    </Router>
    </>
  )
}

export default App;
