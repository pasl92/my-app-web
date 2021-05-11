import { FC } from 'react';
import styled from 'styled-components';
import {LatestPublications} from "./Components/LatestPublications";
import {Workspaces} from "./Components/Workspaces";
import {ResumeYourWork} from "./Components/ResumeYourWork";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1%;
    margin-right:3%;
`

export const MainPage: FC = () => {
    return(
        <Wrapper>
            <LatestPublications></LatestPublications>
            <Workspaces></Workspaces>
            <ResumeYourWork></ResumeYourWork>
        </Wrapper>
    )
};

export default MainPage;