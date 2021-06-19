import { FC } from 'react';
import styled from 'styled-components';
import Workspaces from "../MainPage/Components/Workspaces";
import {ResumeYourWork} from "../MainPage/Components/ResumeYourWork";
import {fontSize} from "../../styledHelpers/FontSizes";
import {Colors} from "../../styledHelpers/Colors";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1%;
    margin-right:1%;
`

const TopSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    box-shadow: 0px 5px 5px ${Colors.black};
`;

const TopPhoteSection = styled.div`
    img{
        width: 100%;
        height: 300px;
    }
`;

const TopTextSection = styled.div`
    
`;

const MiddleSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2%;
    background-color: whitesmoke;
    box-shadow: 0px 5px 5px ${Colors.black};

`;

const TitleMiddleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1%;
    margin-bottom: 1%;
    margin-left: 3%;
    font-size: ${fontSize[16]};
    h3{
        font-weight: bold;
    }
    p{
        margin-right: 2%;
    }
`;

const TitleTopDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1%;
    margin-bottom: 1%;
    font-size: ${fontSize[18]};
    font-weight: bold;
    img{
        margin-right: 2%;
    }
`;

const TitleBottomDiv = styled.div`
    display: flex;
    margin: 1%;
    margin-bottom: 1%;
    font-size: ${fontSize[16]};
    p{
        margin-left: 2%;
    }
    img{
        width: 60px;
        height: 70px;
    }
`;

const BoxsMiddleDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Box =styled.div`
    display: flex;
    flex-direction: column;
    padding: 2%;
    margin: 1%;
    margin-bottom: 2%;
    margin-top: 0;
    max-width: 25%;
    background-color: lightgrey;
    box-shadow: 0px 5px 5px ${Colors.black};
    img{
        height: 30px;
        width: 20px;
    }
    h3{
        font-weight: bold;
        padding-bottom: 2%;
        padding-top: 2%;
    }

`;

export const WorkspacesSite: FC = () => {
    return(
        <Wrapper>
            <TopSection>
                <TopPhoteSection><img src='./panoramic1.png'></img></TopPhoteSection>
                <TopTextSection>
                    <TitleTopDiv><p>Corporate holdings</p> <img src='./icons/cog.png'></img> </TitleTopDiv> 
                    <TitleBottomDiv> <img src='./icons/entities2.png'></img> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </TitleBottomDiv> 
                </TopTextSection>
            </TopSection>
            <MiddleSection>
                <TitleMiddleDiv><h3>Start working on corporate metters</h3><p>Hide</p></TitleMiddleDiv>
                <BoxsMiddleDiv>
                    <Box><img src='./icons/entities2.png'/><h3>Explore your entities</h3><p>Take  few minutes to look at the most important elements and specificities of your entities</p></Box>
                    <Box><img src='./icons/entities2.png'/><h3>Explore your entities</h3><p>Take  few minutes to look at the most important elements and specificities of your entities</p></Box>
                    <Box><img src='./icons/entities2.png'/><h3>Explore your entities</h3><p>Take  few minutes to look at the most important elements and specificities of your entities</p></Box>
                </BoxsMiddleDiv>

            </MiddleSection>

            <ResumeYourWork></ResumeYourWork>
        </Wrapper>
    )
};

export default WorkspacesSite;