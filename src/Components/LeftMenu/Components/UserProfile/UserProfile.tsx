import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../../../styledHelpers/Colors";
import {fontSize} from "../../../../styledHelpers/FontSizes";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    margin-left:5%;
    margin-right: 5%;
    width: 90%;
    text-align: center;
`;

const UserProfileWrapper = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    box-shadow: 0px 5px 5px ${Colors.black};
`

const Photo = styled.div`
    margin-top:10%;
    img {
    max-width:30%;
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
border-color: black;
border-width: 2px;
padding: 1%;
`;

const UnderUserProfile = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    margin-left: 5%;
`;

const OtherSections = styled.div`
    display: flex;
    margin: 2%;
    padding: 1%;
    align-items: center;

    p{
        margin-left: 10%;
    }
    
`;



const UserProfile: FC = () => {
    return( 
        <Wrapper>
            <UserProfileWrapper> 
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
            </UserProfileWrapper> 

            <UnderUserProfile>

                <OtherSections>
                    <img src="./icons/publications.png"/>
                    <p>Publications</p>
                </OtherSections>

                <OtherSections>
                <img src="./icons/ecosystem.png"/>
                    <p>Ecosystem</p>
                </OtherSections>

                <OtherSections>
                <img src="./icons/entities.png"/>
                    <p>Entities</p>
                </OtherSections>

            </UnderUserProfile>
            
        </Wrapper>
        
    );
};
export default UserProfile;