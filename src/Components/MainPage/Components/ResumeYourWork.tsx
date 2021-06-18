import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from '../../../Components/Posts';
import Pagination from '../../../Components/Pagination';
import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";
import Search from "../../TopBar/Components/Search/Search";
import {fontSize} from "../../../styledHelpers/FontSizes";

const ResumeYourWorkDiv = styled.div`
    margin-top: 3%;
    display: flex;
    flex-direction: column;
`;

const TopSection = styled.div`
    display: flex;
    margin-bottom: 1%;
    align-items: center;
`;

const ResumeYourWorkTitle = styled.div`
    display: flex;
    margin-bottom: 0%;
    margin-left: 3%;
    margin-right: 5%;
    font-size: ${fontSize[24]};
    font-weight: bold;
`;

const Fallowed = styled.div`
`;


export const ResumeYourWork: FC = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setPosts(res.data);
          setLoading(false);
        };

        fetchPosts();
        }, []);

        // Get current posts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

         // Change page
         const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return(
        <ResumeYourWorkDiv>
            <TopSection>
                <ResumeYourWorkTitle>Resume your Work</ResumeYourWorkTitle>
                <Search></Search>
                <Fallowed>Fallowed...</Fallowed>
            
            </TopSection>

                <Posts posts={currentPosts} loading={loading}></Posts>
                    <Pagination
                            site="MainPage"
                            postsPerPage={postsPerPage}
                            totalPosts={posts.length}
                            paginate={paginate}/>
        </ResumeYourWorkDiv>
    )
};

export default ResumeYourWork;