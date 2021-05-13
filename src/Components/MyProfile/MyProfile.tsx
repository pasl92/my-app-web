import { FC } from 'react';
import styled from 'styled-components';
import { ProfileSections } from '../MyProfile/Components/ProfileSection';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
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