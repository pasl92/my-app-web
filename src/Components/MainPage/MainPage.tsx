import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: pink;
    margin: 1%;
`
const LatestPublications = styled.div`
    display: flex;
    background-color: whitesmoke;
    box-shadow: 0px 5px 5px ${Colors.black};
`

const LeftSite = styled.div`
    background: url("testImage.png");
    width: 40%;
    display: flex;
    align-items: flex-end;
    
    p{
        margin: 3%;
        color: black;
    }
`
const RightSite = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1%;
`
const TitleLatestPublications = styled.div`

`;

const LastPublicationsWrapper = styled.div`
`

const Publication = styled.div`
    display: flex;
    padding: 3%;
    img{
        width:60px;
    }
`

const FooterLatestPublications = styled.div`
`

export const MainPage: FC = () => {
    return(
        <Wrapper>
            <LatestPublications>
                <LeftSite><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p></LeftSite>
                <RightSite>
                    <TitleLatestPublications>Latest publications</TitleLatestPublications>
                    <LastPublicationsWrapper>
                        <Publication> <img src= "testimagepublications.png"></img> TEST</Publication>
                        <Publication> <img src= "testimagepublications.png"></img> TEST</Publication>
                        <Publication> <img src= "testimagepublications.png"></img> TEST</Publication>
                    </LastPublicationsWrapper>
                    <FooterLatestPublications>Test link </FooterLatestPublications>
                </RightSite>

            </LatestPublications>
        </Wrapper>
    )
};

export default MainPage;