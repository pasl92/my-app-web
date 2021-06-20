import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";
import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts/');
          setPosts(res.data);
          setLoading(false);
        };

        fetchPosts();
        }, []);

    return(
        <Wrapper>
            <PublicationsSite>
                <Publication publication={entities} loading={loading}></Publication>
            </PublicationsSite>
        </Wrapper>
    )
};