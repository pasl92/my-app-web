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
import {Filters} from '../Entities/Filters';
import useDropdown from 'react-dropdown-hook';

const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1%;
    width: 80%;
    margin-left: 1%;
`;

const UpperSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: ${fontSize[24]};
`;

const UpperButtons = styled.div`
    display: flex;
    margin-right: 2%;
    img{
        height: 25px;
        
    }
    button{
        margin: 1%;
        margin-right: 10px;
    }
`;

const MiddleSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 1%;
    margin-bottom: 1%;
`;

const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1%;
`;

const EntitiesSettingsDiv = styled.div`
    margin: 1%;
`;

const EntitiesFiltersDiv = styled.div`
    padding: 0.5%;
`;

const SettingsDiv = styled.div`
    width: 99%;
    box-shadow: 0px 2px 5px ${Colors.black};
    background-color: whitesmoke;
    border-radius: 10px;
`;

const FilterDiv = styled.div`
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

        const[wrappRef, dropdownOpen, toggleDropdown] = useDropdown();

        const menuHandler = () => {
            toggleDropdown();
    }




    return(
        <Wrapper>
            <SettingsDiv>
                <UpperSection>
                    <EntitiesSettingsDiv>Entities  <img src='./icons/cog.png'></img></EntitiesSettingsDiv>
                    <EntitiesFiltersDiv><UpperButtons><button type="button" onClick={() => setVisible(true)}><img src='./icons/mosaic.png' id='mosaicButton' /></button>
                    <button type="button" onClick={() => setVisible(false)}><img src='./icons/hamburger.png' id='hamburgerButton'/></button></UpperButtons></EntitiesFiltersDiv>
                </UpperSection>
                <MiddleSection><UpperButtons><FilterDiv ref={wrappRef} onClick={menuHandler}> <button type="button" ><img src='./icons/filter.png' id='mosaicButton' /></button> </FilterDiv> </UpperButtons>
                {dropdownOpen && <Filters></Filters>}
                </MiddleSection >
            </SettingsDiv>
            <BottomSection>
                {isVisible ? <EntitieMosaic entities={currentPosts} loading={loading}></EntitieMosaic> : <EntitieList entities={currentPosts} loading={loading}></EntitieList>}
            </BottomSection>
        </Wrapper>
    )
};