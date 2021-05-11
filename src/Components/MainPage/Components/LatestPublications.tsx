import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";
import {fontSize} from "../../../styledHelpers/FontSizes";

const LatestPublicationsDiv = styled.div`
    display: flex;
    background-color: whitesmoke;
    box-shadow: 0px 5px 5px ${Colors.black};
`
const LeftSite = styled.div`
    background: url("testImage.png");
    width: 30%;
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
    display: flex;
    font-size: ${fontSize[24]};
    font-weight: bold;
    padding: 1%;

`;

const LastPublicationsWrapper = styled.div`
`

const Publication = styled.div`
    display: flex;
    padding: 1%;
    img{
        width:10%;
    }
    p{
        margin: 1%;
        margin-left: 2%;
    }
`

const FooterLatestPublications = styled.div`
    padding-top: 2%;
    padding-left: 1%;
`

export const LatestPublications: FC = () => {
    return(
        <LatestPublicationsDiv>
                <LeftSite><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p></LeftSite>
                <RightSite>
                    <TitleLatestPublications>Latest publications</TitleLatestPublications>
                    <LastPublicationsWrapper>
                        <Publication> <img src= "testimagepublications.png"></img> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p></Publication>
                        <Publication> <img src= "testimagepublications.png"></img> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p></Publication>
                        <Publication> <img src= "testimagepublications.png"></img> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p></Publication>
                    </LastPublicationsWrapper>
                    <FooterLatestPublications>Test link </FooterLatestPublications>
                </RightSite>

            </LatestPublicationsDiv>
    )
};

export default LatestPublications;