import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import { fontSize } from "../../styledHelpers/FontSizes";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 16%;
    left: 20%;
    width: 30%;
    min-width: 520px;
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
        max-width: 12px;
        max-height: 12px;
        padding-top: 0.5%;
        margin-left: 2%;
    }
`;

const FilterRow = styled.div`
    display: flex;
    padding: 1%;
    p{
        margin-left: 7%;
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


export const Filters: FC = () => {

    return (
        <Wrapper>
            <TopSection><p>Rows are filtered by the following conditions starting the top...     Coming soon...</p></TopSection>
            <MiddleSection>
                <FilterRow><img src='./icons/close.png'/> <p>Where</p> <p>Company</p> <img src='./icons/arrow.png'/> <p>Contains</p> <img src='./icons/arrow.png'/><InputElement>Type...</InputElement></FilterRow>
                <FilterRow><img src='./icons/close.png'/> <p>Where</p> <p>Status</p> <img src='./icons/arrow.png'/> <p>Is</p> <img src='./icons/arrow.png'/><InputElement>Type...</InputElement><p>In</p> <img src='./icons/arrow.png'/> <InputElement>Entity...</InputElement> </FilterRow>
                <FilterRow><img src='./icons/close.png'/> <p>And</p> <p>Company</p> <img src='./icons/arrow.png'/> <p>Contains</p> <img src='./icons/arrow.png'/><InputElement>Type...</InputElement></FilterRow>
            </MiddleSection>
            <BottomSection>
                <img src='./icons/plus.png'/> <p>Add Filter</p> <p>choose property</p> <img src='./icons/arrow.png'/>
            </BottomSection>
        </Wrapper>
    )
}




