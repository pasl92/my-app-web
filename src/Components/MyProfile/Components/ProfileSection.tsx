import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";


const ProfileSectionsDiv = styled.div`
    display: flex;
    background-color: whitesmoke;
    box-shadow: 0px 5px 5px ${Colors.black};
    flex-direction: column;
`;

const RightSite = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1%;
`

export const ProfileSections: FC = () => {
    return(
        <ProfileSectionsDiv>
                <RightSite>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p>
                </RightSite>
                <RightSite>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p>
                </RightSite>
                <RightSite>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p>
                </RightSite>

            </ProfileSectionsDiv>
    )
};