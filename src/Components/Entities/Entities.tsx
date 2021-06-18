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
    margin-top: 3%;
    width: 70%;
`;

const UpperSection = styled.div`
    width: 100%;
    background-color: gray;
    display: flex;
    justify-content: space-between;
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
    margin: 1%;
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
    const [entitiesPerPage] = useState(24);

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
                <EntitiesSettingsDiv>Entities *</EntitiesSettingsDiv>
                <EntitiesFiltersDiv>Filtry</EntitiesFiltersDiv>
            </UpperSection>
            <MiddleSection>
                <LeftMiddleSection>Test TesT</LeftMiddleSection>
                <RightMiddleSection>tEST</RightMiddleSection>
            </MiddleSection>
            <BottomSection>
                <AllEntities><Entitie entities={currentPosts} loading={loading}></Entitie></AllEntities>
                        <Pagination
                                site="Entities"
                                postsPerPage={entitiesPerPage}
                                totalPosts={entities.length}
                                paginate={paginate}/>
            </BottomSection>
        </Wrapper>
    )
};