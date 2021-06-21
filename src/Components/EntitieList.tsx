import React from 'react';
import styled from 'styled-components';
import {Colors} from "../styledHelpers/Colors";
import {fontSize} from "../styledHelpers/FontSizes";
import _ from "lodash";

const EntitieSection = styled.div`
    background-color: whitesmoke;
    margin: 0.5%;
    display: flex;
    width: 96.5%;
    height: 150px;
    padding: 0.5%;
    box-shadow: 0px 2px 5px ${Colors.black};
    border-radius: 10px;
    img{
      border-radius: 10px;
    }
    &:hover {
            box-shadow: 0px 4px 20px ${Colors.black};
        } 
`;

const PostsSectionTitle = styled.div`
    color: ${Colors.lightBlue};
    font-size: ${fontSize[14]};
    font-weight:bold;
    margin-bottom: 0.5%;
`;


const PostsSectionBottom = styled.div`
    color: ${Colors.grey};
    font-size: ${fontSize[12]};
    margin-top: 0.5%;
`;

const EntitieDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
        
`;

const EntitiePhoto = styled.div`

`;

const EntitieRightSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2%;
`;

const EntitieList = ({entities, loading} : {entities: any[], loading: boolean}) =>
{
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const companyName = [ 'Subsid Corp ltd', 'World Company SAS'];

  return (
    <EntitieDiv>
      {entities.map(entities => (
          <EntitieSection key={entities.id} className='list-group-item'>
            <EntitiePhoto><img src={entities.thumbnailUrl} alt="description of image"></img></EntitiePhoto>
              <EntitieRightSection>
                <PostsSectionTitle>{_.sample(companyName)}</PostsSectionTitle>
                <PostsSectionBottom>Caracas 1050,Distrito Capital</PostsSectionBottom>
              </EntitieRightSection>
        </EntitieSection>
        ))}
    </EntitieDiv>
  );
};

export default EntitieList;