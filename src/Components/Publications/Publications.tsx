import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";
import React, { useState, useEffect } from 'react';
import {fontSize} from "../../styledHelpers/FontSizes";
import axios from 'axios';
import Publication from '../Publications/Publication'



const Wrapper =styled.div`
    display: flex;

`;

const PublicationsSite =styled.div`
    padding: 1%;
    img{
        width: 8%;
        height: 8%;
        box-shadow: 1px 1px 12px ${Colors.black};
    }
`;


export const Publications: FC = () => {

    const [entities, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [entitiesPerPage] = useState(20);

    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts/');
          setPosts(res.data);
          setLoading(false);
        };

        fetchPosts();
        }, []);

        const indexOfLastPost = currentPage * entitiesPerPage;
        const indexOfFirstPost = indexOfLastPost - entitiesPerPage;
        const currentPosts = entities.slice(indexOfFirstPost, indexOfLastPost);



    return(
        <Wrapper>
            <PublicationsSite>
                <Publication publication={currentPosts} loading={loading}></Publication>
            </PublicationsSite>
        </Wrapper>
    )
};