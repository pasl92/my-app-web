import { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { Component  } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import Pagination from '../../Components/Pagination';
import {Colors} from "../../styledHelpers/Colors";
import {fontSize} from "../../styledHelpers/FontSizes";
import axios from 'axios';
import Entitie from '../../Components/Entitie';

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

const LeftMiddleSection = styled.div`
    margin: 1%;
`;

const RightMiddleSection = styled.div`
    margin: 1%;
`;

const AllEntities =styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`

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

        // Get current posts
        const indexOfLastPost = currentPage * entitiesPerPage;
        const indexOfFirstPost = indexOfLastPost - entitiesPerPage;
        const currentPosts = entities.slice(indexOfFirstPost, indexOfLastPost);

         // Change page
         const paginate = pageNumber => setCurrentPage(pageNumber);


    return(
        <Wrapper>
            <UpperSection>
                <EntitiesSettingsDiv>Entities  <img src='./icons/cog.png'></img></EntitiesSettingsDiv>
                <EntitiesFiltersDiv><UpperButtons><button type="button"><img src='./icons/mosaic.png'/></button><button type="button"><img src='./icons/hamburger.png'/></button></UpperButtons></EntitiesFiltersDiv>
            </UpperSection>
            <MiddleSection>
                <LeftMiddleSection>Test TesT</LeftMiddleSection>
                <RightMiddleSection>tEST</RightMiddleSection>
            </MiddleSection>
            <BottomSection>
                <Entitie entities={currentPosts} loading={loading}></Entitie>
            </BottomSection>
        </Wrapper>
    )
};