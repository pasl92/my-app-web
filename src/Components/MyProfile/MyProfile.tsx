import { FC } from 'react';
import styled from 'styled-components';
import { ProfileSections } from '../MyProfile/Components/ProfileSection';
import { ExpertiseSections } from '../MyProfile/Components/ExpertiseSection';
import { PanelInformations } from '../MyProfile/Components/PanelInformations';
import { Proposals } from '../MyProfile/Components/Proposals';
import { InternalReviews } from '../MyProfile/Components/InternalReviews';
import { AmountOfFees } from '../MyProfile/Components/AmountOfFees';
import {Colors} from "../../styledHelpers/Colors";


const Wrapper = styled.div`
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 1%;
    box-shadow: 0px 4px 4px ${Colors.black};
`;


export const MyProfile: FC = () => {
    
    return(
        <Wrapper>
            <ProfileSections></ProfileSections>
            <ExpertiseSections></ExpertiseSections>
            <PanelInformations></PanelInformations>
            <Proposals></Proposals>
            <InternalReviews></InternalReviews>
            <AmountOfFees></AmountOfFees>
        </Wrapper>
    )
};