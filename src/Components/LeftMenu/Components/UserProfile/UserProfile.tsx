import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../../../styledHelpers/Colors";
import {fontSize} from "../../../../styledHelpers/FontSizes";

const Wrapper = styled.div`
    background-color: white;
    margin-top: 5%;
    margin-left:5%;
    margin-right: 5%;
    height: 25%;
    width: 90%;
    text-align: center;
    box-shadow: 0px 5px 5px ${Colors.black};
`;

const Photo = styled.div`
    margin-top:10%;
    img {
    width: 20%;
    height: 40%;
    }
`

const NameSurename = styled.p`
    margin-top:10px;
    color: ${Colors.lightBlue};
    font-size: ${fontSize[14]};
    font-weight:bold;
    font-family: Tahoma;
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
background-color: lightsalmon;
    display: flex;
    flex-direction: column;
    margin: 3%;
`

const YourNetwork =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3%;
    margin-left: 5%;
    margin-right: 5%;
`;

const YourPublications = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3%;
    margin-left: 5%;
    margin-right: 5%;
`;

const PhotoBorder = styled.div`
background-color: lightgreen;
border-color: black;
border-width: 2px;
padding: 1%;
`;

const UnderUserProfile = styled.div`
background-color: yellowgreen;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
`;

const OtherSections = styled.div`
    display: flex;
    background-color: yellow;
    margin: 2%;
    padding: 3%;
    align-items: center;
    justify-content: space-between;
`;

const UserProfile: FC = () => {
    return( 
        <Wrapper>  
            <Photo>
                <img src='./logo.png'alt='Logo'/>
            </Photo>

            <NameSurename>Humbrerta Swift</NameSurename>
            <JobTitle>Job title - Company</JobTitle>
            <ColoredLine color="black" />

            <BottomSection>

                <YourNetwork>
                    <img src="./icons/network.png"/>
                        Your network
                        <PhotoBorder>
                            <img src="./icons/user-plus.png"/>
                        </PhotoBorder>
                </YourNetwork>

                <YourPublications>
                    <img src="./icons/bell.png"/>
                    Your publications
                        <PhotoBorder>
                            <img src="./icons/plus.png"/>
                        </PhotoBorder>
                
                </YourPublications>
            </BottomSection>
            
            <UnderUserProfile>

                <OtherSections>
                    <img src="./icons/publications.png"/>
                    Publications
                </OtherSections>

                <OtherSections>
                <img src="./icons/ecosystem.png"/>
                    Ecosystem
                </OtherSections>

                <OtherSections>
                <img src="./icons/entities.png"/>
                    Entities
                </OtherSections>

            </UnderUserProfile>
            
        </Wrapper>
        
    );
};
export default UserProfile;