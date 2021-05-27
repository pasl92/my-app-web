import React from 'react';
import styled from 'styled-components';
import {Colors} from "../styledHelpers/Colors";
import {fontSize} from "../styledHelpers/FontSizes";


const PaginationDiv = styled.div`
    display: flex;
    justify-content: center;
    text-decoration: none;
`  

const Pagi = styled.div`
    margin: 1%;
`  

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers: number [] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (

      <PaginationDiv>
        {pageNumbers.map(number => (
          <Pagi key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='MainPage' className='page-link'>
              {number}
            </a>
            </Pagi>
        ))}
      
      </PaginationDiv>

  );
};

export default Pagination;