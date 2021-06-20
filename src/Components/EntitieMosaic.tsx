import React from 'react';
import styled from 'styled-components';
import {Colors} from "../styledHelpers/Colors";
import {fontSize} from "../styledHelpers/FontSizes";
import _ from "lodash";

const EntitieSection = styled.div`
    background-color: whitesmoke;
    margin: 0.5%;
    display: flex;
    width: 270px;
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

const PostsSectionText = styled.div`
`;

const PostsSectionBottom = styled.div`
    color: ${Colors.grey};
    font-size: ${fontSize[12]};
    margin-top: 0.5%;
`;

const EntitieDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
        
`;

const EntitiePhoto = styled.div`

`;

const EntitieRightSewction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2%;
`;

const EntitieMosaic = ({entities, loading} : {entities: any[], loading: boolean}) =>
{
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const companyName = [ 'Subsid Corp ltd', 'World Company SAS'];

  return (
    <EntitieDiv>
      {entities.map(entities => (
          <EntitieSection key={entities.id} className='list-group-item'>
            <EntitiePhoto><img src={entities.thumbnailUrl}></img></EntitiePhoto>
              <EntitieRightSewction>
                <PostsSectionTitle>{_.sample(companyName)}</PostsSectionTitle>
                <PostsSectionBottom>Caracas 1050,Distrito Capital</PostsSectionBottom>
              </EntitieRightSewction>
        </EntitieSection>
        ))}
    </EntitieDiv>
  );
};

export default EntitieMosaic;