import { FC } from 'react';
import styled from 'styled-components';

import { ProfileSections } from '../MyProfile/Components/ProfileSection';

const Wrapper = styled.div`
background-color: whitesmoke;
    display: flex;
    width: 40%;
    margin: 1%;
    margin-right:3%;
`;


export const MyProfile: FC = () => {
    
    return(
        <Wrapper>
            <ProfileSections></ProfileSections>
        </Wrapper>
    )
};