import React from 'react';
import styled from 'styled-components';
import {Colors} from "../styledHelpers/Colors";
import {fontSize} from "../styledHelpers/FontSizes";

const EntitieSection = styled.div`
    margin: 1%;
    display: flex;
    flex-wrap: wrap;
    width: 150px;
    height: 100px;
    padding: 0.5%;
    margin-bottom: 0.5%;
    margin-left: 1%;
    margin-right: 1%;
    box-shadow: 0px 2px 5px ${Colors.black};
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

const Entitie = ({entities, loading} : {entities: any[], loading: boolean}) =>
{
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {entities.map(entities => (
          <EntitieSection key={entities.id} className='list-group-item'>
            <PostsSectionTitle>{entities.title}</PostsSectionTitle>
            <PostsSectionText>{entities.body}</PostsSectionText>
            <PostsSectionBottom>Caracas 1050,Distrito Capital</PostsSectionBottom>
        </EntitieSection>
        ))}
    </div>
  );
};

export default Entitie;