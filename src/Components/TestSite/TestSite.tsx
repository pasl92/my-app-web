import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";

const Wrapper =styled.div`
    display: flex;
`;

const Ntdh =styled.div`
    padding-left: 50%;
    padding-top:4%;
    img{
        box-shadow: 1px 1px 12px ${Colors.black};
    }
`;


export const TestSite: FC = () => {
    return(
        <Wrapper>
            <Ntdh>
                <img id="ntdh" src="ntdh.gif"></img>
            </Ntdh>
        </Wrapper>
    )
};