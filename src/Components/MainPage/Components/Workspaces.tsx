import { FC } from 'react';
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
    margin-bottom: 0%;
    margin-left: 3%;
    font-size: ${fontSize[24]};
    font-weight: bold;
`;

const WorkspacesDataDiv = styled.div`
    display: flex;
`
const Post = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    margin: 1%;
    box-shadow: 0px 5px 5px ${Colors.black};
    background-color: whitesmoke;

    img{
        max-width: 100%;
        max-height: 100%;    
        }

    p{
        margin: 1%;
        margin-bottom: 5%;
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