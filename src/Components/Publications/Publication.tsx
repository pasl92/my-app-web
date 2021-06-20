import React from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";
import {fontSize} from "../../styledHelpers/FontSizes";
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
    &:hover {
            box-shadow: 0px 4px 20px ${Colors.black};
        } 
`;


const EntitieDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
        
`;


const LastPublicationsWrapper = styled.div`
`

const PublicationDiv = styled.div`
    display: flex;
    padding: 1%;
    border-radius: 10px;
    img{
        width:8%;
        border-radius: 10px;
    }
    p{
        margin: 1%;
        margin-left: 2%;
    }
    &:hover {
            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);
        }  
`


const PublicationTextUser = styled.div`
    display: flex;
    flex-direction: column;
`

const UserDiv = styled.div`
    color: ${Colors.grey};
    font-size: ${fontSize[12]};
    margin-top: 3%;
    margin-left: 2%;
`


const Publication = ({publication, loading} : {publication: any[], loading: boolean}) =>
{
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <EntitieDiv>
      {publication.map(publication => (
          <EntitieSection key={publication.id} className='list-group-item'>
              <LastPublicationsWrapper>
                        <PublicationDiv> <img src= "testimagepublications.png"></img><PublicationTextUser><p>{publication?.body}</p> <UserDiv>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</UserDiv></PublicationTextUser></PublicationDiv>
                    </LastPublicationsWrapper>
        </EntitieSection>
        ))}
    </EntitieDiv>
  );
};

export default Publication;