import { FC } from 'React';
import styled from 'styled-components';

const Wrapper =styled.div`
    width: 100%;
    height: 60px;
    background-color: red;
`;

const InnerWrapper = styled.div`
    width: 1200px;
`;


export const TopBar: FC = () => {
    return(
        <Wrapper>
            <InnerWrapper>
                <>TopBar</>
            </InnerWrapper>
        </Wrapper>
    )
};