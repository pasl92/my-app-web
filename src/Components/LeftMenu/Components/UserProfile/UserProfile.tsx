import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import {Colors} from "../../../../styledHelpers/Colors";
import {fontSize} from "../../../../styledHelpers/FontSizes";
import {Users} from "../../../Data/GetUsers"


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    margin-left:5%;
    margin-right: 5%;
    width: 90%;
    text-align: center;
    font-weight:bold;
`;

const UserProfileWrapper = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    box-shadow: 0px 5px 5px ${Colors.black};
    border-radius: 5%;
    text-decoration: none;
    a {
        text-decoration:none;
        color: black;
        }
`

const Photo = styled.div`
    margin-top:10%;
    img {
    max-width:40%;
    border-radius: 10px;
    }
`

const NameSurename = styled.p`
    margin-top:10px;
    font-size: ${fontSize[18]};
    font-weight:bold;
    &:hover {
            transition-delay: 0.2s;
            font-size: ${fontSize[22]};
        }  
    a {
        text-decoration:none;
        color: ${Colors.lightBlue};
        }
`

const JobTitle = styled.p`
    margin-top: 10px;
    color: gray;
`

const ColoredLine = ({color} : {color: string}) => (
    <hr
        style={{

            height: 1,
            width: '99.4%'
        }}
    />
);

const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3%;
`

const YourNetwork =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2%;
    margin-left: 5%;
    margin-right: 5%;
    padding: 2%;
    &:hover {
            transition-delay: 0.1s;
            background-color: lightgrey;
            border-radius: 10px;
        } 
`;

const YourPublications = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2%;
    margin-left: 5%;
    margin-right: 5%;
    padding:2%;
    &:hover {
            transition-delay: 0.1s;
            background-color: lightgrey;
            border-radius: 10px;
        }  
`;

const PhotoBorder = styled.div`
border-color: black;
border-width: 2px;
padding: 1%;
`;

const UnderUserProfile = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    margin-left: 5%;
    font-weight: lighter;
`;

const OtherSections = styled.div`
    display: flex;
    margin: 2%;
    padding: 1%;
    align-items: center;
    &:hover {
            transition-delay: 0.2s;
            font-weight: 600;
        } 

    p{
        margin-left: 10%;
    }

    text-decoration: none;
    a {
        text-decoration:none;
        color: black;
        }
    
`;


type UserType = {
    title: string;
    name: string;
    company:{
        name: string
    } 
 }

const UserProfile: FC = () => {
    
    const [apiData, setApiData] = useState<UserType>()
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users/1").then(res=>res.json()).then(json=>setApiData(json))
     }, [])


    return( 
        <Wrapper>
            <UserProfileWrapper> 
                <Photo>
                    <img src='./testimagepublications.png'alt='Logo'/>
                </Photo>

                <NameSurename><a href="MyProfile"> {apiData?.name} </a></NameSurename>
                <JobTitle>{apiData?.company?.name}</JobTitle>
                <ColoredLine color="black" />

                <BottomSection>

                    <YourNetwork >
                        <img src="./icons/network.png"/>
                            <a href="testsite"> Your network </a>
                            <PhotoBorder>
                                <img src="./icons/user-plus.png"/>
                            </PhotoBorder>
                    </YourNetwork>

                    <YourPublications>
                        <img src="./icons/bell.png"/>
                        <a href="Publications"> Your publications </a>
                            <PhotoBorder>
                                <img src="./icons/plus.png"/>
                            </PhotoBorder>
                    
                    </YourPublications>
                </BottomSection>
            </UserProfileWrapper> 

            <UnderUserProfile>

                <OtherSections>
                    <img src="./icons/publications.png"/>
                    <a href="Publications"> <p>Publications</p> </a>
                </OtherSections>

                <OtherSections>
                <img src="./icons/ecosystem.png"/>
                <a href="testsite"> <p>Ecosystem</p> </a>
                </OtherSections>

                <OtherSections>
                <img src="./icons/entities.png"/>
                <a href="Entities"> <p>Entities</p> </a>
                </OtherSections>

            </UnderUserProfile>
            
        </Wrapper>
        
    );
};
export default UserProfile;