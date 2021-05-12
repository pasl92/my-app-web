import { FC } from 'react';
import { Component  } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";
import {fontSize} from "../../../styledHelpers/FontSizes";


const WorkspacesDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2%;
`;

const WorkspacesTitle = styled.div`
    display: flex;
    margin: 1%;
    margin-bottom: 1%;
    margin-left: 3%;
    font-size: ${fontSize[24]};
    font-weight: bold;
    
`;

const WorkspacesDataDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar; 
`
const Post = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    margin: 1%;
    box-shadow: 0px 5px 5px ${Colors.black};
    background-color: whitesmoke;
    flex: 0 0 auto; 

    img{
        max-width: 100%;
        max-height: 100%;    
        }

    p{
        margin: 1%;
        margin-bottom: 10%;
    }
`

export const Workspaces: FC = () => {
  return(
      <WorkspacesDiv>
              <WorkspacesTitle>Workspaces</WorkspacesTitle>
                  <WorkspacesDataDiv>
                      <Post>  <img src='./testImage.png'></img> <p>Test</p></Post>
                      <Post>  <img src='./testImage.png'></img> <p>Test</p></Post>
                      <Post>  <img src='./testImage.png'></img> <p>Test</p></Post>
                      <Post>  <img src='./testImage.png'></img> <p>Test</p></Post>
                      <Post>  <img src='./testImage.png'></img> <p>Test</p></Post>
                      
                      

                  </WorkspacesDataDiv>
              

      </WorkspacesDiv>
  )
};

export default Workspaces;