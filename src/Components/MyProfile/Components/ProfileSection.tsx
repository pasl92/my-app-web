import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";
import {fontSize} from "../../../styledHelpers/FontSizes";
import { FC, useState, useEffect } from 'react';



const ProfileSectionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3%;
`;

const TopSection = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    p{
        margin-left: 1%;
        font-size: ${fontSize[18]};
    }
    img{
        margin-left: 1%;
        width: 15px;
    }
`

const BottomSection = styled.div`
    background-color: lightgrey;
    display: flex;
    margin-top: 3%;
    padding: 2%;
    justify-content: space-evenly;
    border-radius: 10px;
    box-shadow: 0px 2px 2px ${Colors.black};
`

const PhotoUserDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    img {
        max-width: 50%;
        border-radius: 10px;
    }
    a{
        text-decoration:none;
        margin-left: 1%;
        margin-top: 4%;
        color: ${Colors.lightBlue};
        font-weight: 600;
    }
`

const DataUserDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    img {
        max-width:20%;
        border-radius: 10px;
    }
    h3{
        font-weight: bold;
    }
`

const RighrSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ButttonSection = styled.div`
    display: flex;
    justify-content: flex-end;
    img{
        width: 20px;
    }
`;

const EmailSection = styled.div`
`;

const ExitIcon = styled.div`
    margin-left: 3%;
`;

type UserType = {
    title: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    company:{
        name: string
    } ;
    address:{
        city: string
    }
 }

export const ProfileSections: FC = () => {

    const [apiData, setApiData] = useState<UserType>()
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users/1").then(res=>res.json()).then(json=>setApiData(json))
     }, [])

    return(
        <ProfileSectionsDiv>
                <TopSection>
                    <img src= "./icons/comments.png"/><p>Message</p><img src= "./icons/plus.png"/><p>Create a request</p><img src= "./icons/bell.png"/><p>Add to a cluster</p><ExitIcon><img src= "./icons/close.png"/></ExitIcon>
                </TopSection>

                <BottomSection>

                    <PhotoUserDiv>
                        <img src='./testimagepublications.png'alt='Logo'/> <a href="MyProfile">SEE PROFILE</a>
                    </PhotoUserDiv>
                    <DataUserDiv>
                        <h3>{apiData?.name}</h3>
                        <h3>{apiData?.company?.name}</h3>
                        <p>{apiData?.address?.city}</p>
                        <p>{apiData?.username}</p>
                    </DataUserDiv>

                    <RighrSection>
                        <ButttonSection>
                            <button type="button"><img src= "./icons/edit.png"/></button>
                        </ButttonSection>
                        <EmailSection>
                            <p>{apiData?.email}</p>
                            <p>{apiData?.phone}</p>
                        </EmailSection>

                    </RighrSection>

                </BottomSection>

            </ProfileSectionsDiv>
    )
};