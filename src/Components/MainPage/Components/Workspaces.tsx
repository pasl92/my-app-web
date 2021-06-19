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
    &:hover {
            box-shadow: 0px 10px 15px ${Colors.black};
        } 
    
    img{
        max-width: 100%;
        max-height: 100%;    
        }

    a{
        text-decoration:none;
        font-weight: bold;
        margin: 1%;
        margin-right: 6%;
        margin-bottom: 10%;
        margin-top: 2%;
    }
`

export const Workspaces: FC = () => {
  return(
      <WorkspacesDiv>
              <WorkspacesTitle>Workspaces</WorkspacesTitle>
                  <WorkspacesDataDiv>
                      <Post>  <img src='./testImage.png'></img> <a href="WorkspacesSite"> <p>Client contact</p> </a> </Post>
                      <Post>  <img src='./testImage.png'></img> <a href="WorkspacesSite"> <p>Supplier contact</p> </a></Post>
                      <Post>  <img src='./testImage.png'></img> <a href="WorkspacesSite"> <p>Corporate</p> </a></Post>
                      <Post>  <img src='./testImage.png'></img> <a href="TestSite"> <p>Test</p> </a></Post>
                      <Post>  <img src='./testImage.png'></img> <a href="TestSite"> <p>Test</p> </a></Post>
                      <Post>  <img src='./testImage.png'></img> <a href="TestSite"> <p>Test</p> </a></Post>
                      <Post>  <img src='./testImage.png'></img> <a href="TestSite"> <p>Test</p> </a></Post>
                      <Post>  <img src='./testImage.png'></img> <a href="TestSite"> <p>Test</p> </a></Post>
                      <Post>  <img src='./testImage.png'></img> <a href="TestSite"> <p>Test</p> </a></Post>
                      <Post>  <img src='./testImage.png'></img> <a href="TestSite"> <p>Test</p> </a></Post>
                      <Post>  <img src='./testImage.png'></img> <a href="TestSite"> <p>Test</p> </a></Post>

                  </WorkspacesDataDiv>
              

      </WorkspacesDiv>
  )
};

export default Workspaces;