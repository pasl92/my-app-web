import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import { fontSize } from "../../../styledHelpers/FontSizes";
import styled from "styled-components";
import {Colors} from "../../../styledHelpers/Colors";

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 7%;
    left: 75%;
    width: 10%;
    min-width: 300px;
    background-color: whitesmoke;
    border:1px solid gray;
    padding: 1%;
    box-shadow: 0px 2px 5px black;
    border-radius: 10px;
`;

const TopSection = styled.div`
    display: flex;
    color: gray;
    font-size: ${fontSize[12]};
    margin-bottom: 2%;
`;

const MiddleSection = styled.div`
    display: flex;
    flex-direction: column;
    img{
        max-width: 30px;
        max-height: 30px;
        padding-top: 0.5%;
        margin-left: 2%;
    }
`;

const MessageRow = styled.div`
    display: flex;
    padding: 1%;
    align-items: center;
    p{
        margin-left: 7%;
        color: gray;
        background-color: whitesmoke;
        padding: 2%;
        border-radius: 10px;
    }
    h3{
        padding-left: 7%;
        font-weight: 600;
        min-width: 105px;
    }
    img{
        border-radius:  10px;
    }
    background-color: lightgrey;
    border-radius: 10px;
    margin-bottom: 1%;
`;

const InputElement = styled.div`
    background-color: whitesmoke;
    border-radius: 10px;
    margin-left: 4%;
    padding-top: 0.5%;
    padding-right: 2%;
    padding-left: 2%;
    font-size: ${fontSize[12]};
    color: darkgrey;
`;

const BottomSection = styled.div`
    display: flex;
    margin-top: 2%;
    img{
        max-width: 12px;
        max-height: 12px;
        padding-top: 0.5%;
        margin-left: 2%;
    }
    p{
        margin-left: 3%;
    }
    background-color: whitesmoke;
    color: ${Colors.lightBlue};
`;


export const Messages: FC = () => {

    return (
        <Wrapper>
            <TopSection><p>Messages ...</p></TopSection>
            <MiddleSection>
                <MessageRow><img src='./testimagepublications.png'/> <h3>Paweł Sałata</h3> <p>Da Pan 5?</p> </MessageRow>
                <MessageRow><img src='./testimagepublications.png'/> <h3>Phil Lorens</h3> <p>: )</p> </MessageRow>
            </MiddleSection>
            <BottomSection>
                  <p>More...</p> 
            </BottomSection>
        </Wrapper>
    )
}




