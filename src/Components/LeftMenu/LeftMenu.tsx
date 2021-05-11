import { FC } from 'react';
import styled from 'styled-components';
import  UserProfile  from  "./Components/UserProfile/UserProfile";



const Wrapper =styled.div`
    display: flex;
    height: 100vh;
    width: 25%;
    margin-left: 1%;
`;


export const LeftMenu: FC = () => {
    return(
        <Wrapper>
            <UserProfile></UserProfile>
        </Wrapper>
    )
};

