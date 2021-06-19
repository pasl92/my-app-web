import { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { Component  } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import Pagination from '../../Components/Pagination';
import {Colors} from "../../styledHelpers/Colors";
import {fontSize} from "../../styledHelpers/FontSizes";
import axios from 'axios';
import EntitieMosaic from '../EntitieMosaic';
import EntitieList from '../EntitieList';

const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1%;
    width: 80%;
    margin-left: 1%;
`;

const UpperSection = styled.div`
    width: 100%;
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`;

const UpperButtons = styled.div`
    img{
        height: 20px;
    }

`;

const MiddleSection = styled.div`
    background-color: yellow;
    display: flex;
    justify-content: space-between;
`;

const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const EntitiesSettingsDiv = styled.div`
    margin: 1%;
`;

const EntitiesFiltersDiv = styled.div`
    padding: 0.5%;
`;


export const Entities: FC = () => {

    
    const [entities, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [entitiesPerPage] = useState(20);

    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
          setPosts(res.data);
          setLoading(false);
        };

        fetchPosts();
        }, []);

        const indexOfLastPost = currentPage * entitiesPerPage;
        const indexOfFirstPost = indexOfLastPost - entitiesPerPage;
        const currentPosts = entities.slice(indexOfFirstPost, indexOfLastPost);

        //true grid

        const [isVisible, setVisible] = useState(true);



    return(
        <Wrapper>
            <UpperSection>
                <EntitiesSettingsDiv>Entities  <img src='./icons/cog.png'></img></EntitiesSettingsDiv>
                <EntitiesFiltersDiv><UpperButtons><button type="button" onClick={() => setVisible(true)}><img src='./icons/mosaic.png' id='mosaicButton' /></button>
                <button type="button" onClick={() => setVisible(false)}><img src='./icons/hamburger.png' id='hamburgerButton'/></button></UpperButtons></EntitiesFiltersDiv>
            </UpperSection>

            <BottomSection>
                {isVisible ? <EntitieMosaic entities={currentPosts} loading={loading}></EntitieMosaic> : <EntitieList entities={currentPosts} loading={loading}></EntitieList>}
                
                
            </BottomSection>
        </Wrapper>
    )
};