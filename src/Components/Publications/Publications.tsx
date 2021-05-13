import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

const Wrapper =styled.div`
    display: flex;

`;

const PublicationsSite =styled.div`
    padding-left: 50%;
    padding-top:4%;
    img{
        box-shadow: 1px 1px 12px ${Colors.black};
    }
`;


export const Publications: FC = () => {
    return(
        <Wrapper>
            <PublicationsSite>
                Tutaj będzię podstrona Publikacje
            </PublicationsSite>
        </Wrapper>
    )
};