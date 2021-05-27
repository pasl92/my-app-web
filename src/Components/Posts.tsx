import React from 'react';
import styled from 'styled-components';
import {Colors} from "../styledHelpers/Colors";
import {fontSize} from "../styledHelpers/FontSizes";

const PostsSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
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

const Posts = ({posts, loading} : {posts: any[], loading: boolean}) =>
{
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {posts.map(post => (
          <PostsSection key={post.id} className='list-group-item'>
            <PostsSectionTitle>{post.title}</PostsSectionTitle>
            <PostsSectionText>{post.body}</PostsSectionText>
            <PostsSectionBottom>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</PostsSectionBottom>
        </PostsSection>
        ))}
    </div>
  );
};

export default Posts;