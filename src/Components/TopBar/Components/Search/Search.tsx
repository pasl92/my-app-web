import {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
background-color: lightyellow;
  display: flex;
  width: 60%;
  align-items: center;
`;

const Input = styled.input`
  width: 70%;
  height: 60%;
  border: 1px solid lightgrey;
  text-align: center;
  font-family:Tahoma;
  font-size: 14px;
`;

const SearchIcon = styled.img`
  background-size: cover;
  :hover {
          cursor: pointer;
  }  
`;

const Search: FC = () => {
    return (
        <>
            <Wrapper>
                <Input placeholder='Search Legalcluster...' />
                <SearchIcon 
                  src={"./icons/search.svg"}
                  alt="img">
                </SearchIcon>
            </Wrapper>
        </>
    );
};

export default Search;