import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";
import {fontSize} from "../../../styledHelpers/FontSizes";

const LatestPublicationsDiv = styled.div`
    display: flex;
    background-color: whitesmoke;
    box-shadow: 0px 5px 5px ${Colors.black};
    border-radius: 10px;
`
const LeftSite = styled.div`
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-image: url("testImage.png");
    box-shadow: inset 0px -174px 69px -41px rgba(0,0,0,0.52);
    width: 30%;
    display: flex;
    align-items: flex-end;
    &:hover {
            box-shadow: inset 0px -174px 69px -41px rgba(0,0,0,0.9);
        } 
    
    p{
        margin: 3%;
        color: whitesmoke;
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
        border-radius: 10px;
    }
    p{
        margin: 1%;
        margin-left: 2%;
    }
    &:hover {
            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);
        }  
`

const FooterLatestPublications = styled.div`
    padding-top: 1%;
    padding-left: 1%;
    font-weight: bold;
    font-size: ${fontSize[20]};
    a{
        text-decoration:none;
    }
`

const PublicationTextUser = styled.div`
    display: flex;
    flex-direction: column;
`

const UserDiv = styled.div`
    color: ${Colors.grey};
    font-size: ${fontSize[12]};
    margin-top: 3%;
    margin-left: 2%;
`

type PublicationType = {
    title: string;
    body: string;
 }

export const LatestPublications: FC = () => {

    const [apiData0, setApiData0] = useState<PublicationType>()
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts/1").then(res=>res.json()).then(json=>setApiData0(json))
     }, [])

     const [apiData1, setApiData1] = useState<PublicationType>()
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts/2").then(res=>res.json()).then(json=>setApiData1(json))
     }, [])

     const [apiData2, setApiData2] = useState<PublicationType>()
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts/3").then(res=>res.json()).then(json=>setApiData2(json))
     }, [])


    return(
        <LatestPublicationsDiv>
                <LeftSite><p>{apiData0?.body}</p></LeftSite>
                <RightSite>
                    <TitleLatestPublications>Latest publications</TitleLatestPublications>
                    <LastPublicationsWrapper>
                        <Publication> <img src= "testimagepublications.png"></img><PublicationTextUser><p>{apiData0?.body}</p> <UserDiv>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</UserDiv></PublicationTextUser></Publication>
                        <Publication> <img src= "testimagepublications.png"></img> <PublicationTextUser><p>{apiData1?.body}</p> <UserDiv>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</UserDiv></PublicationTextUser> </Publication>
                        <Publication> <img src= "testimagepublications.png"></img> <PublicationTextUser><p>{apiData2?.body}</p> <UserDiv>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</UserDiv></PublicationTextUser></Publication>
                    </LastPublicationsWrapper>
                    <FooterLatestPublications><a href="Publications"> See more publications</a></FooterLatestPublications>
                </RightSite>

            </LatestPublicationsDiv>
    )
};

export default LatestPublications;