import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";
import {fontSize} from "../../../styledHelpers/FontSizes";
import { FC, useState, useEffect } from 'react';


const TitleDiv = styled.div`
    font-weight: 550;
    margin-left: 5%;
    margin-bottom: 1%;
`;

const ProposalsDiv = styled.div`
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 10px;
    box-shadow: 0px 2px 2px ${Colors.black};
    padding: 3%;
    padding-top: 0;
    margin: 3%;
    margin-top: 0;
`;

const ColoredLine = ({color} : {color: string}) => (
    <hr
        style={{

            height: 1,
            width: '99.4%'
        }}
    />
);

const ColumnNameDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;
    padding-bottom: 0;
    font-weight: 600;
`;

const ColumnTextDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;
    padding-bottom: 0;
    font-weight: 500;
`;


export const InternalReviews: FC = () => {


    return(
        <div>
            <TitleDiv>Internal reviews</TitleDiv>
            <ProposalsDiv>
                <ColumnNameDiv><p>Name</p><p>Entity</p><p>Location</p><p>Expertise</p><p>Date</p></ColumnNameDiv>
                <ColoredLine color="black" />
                <ColumnTextDiv><p>Name</p><p>Entity</p><p>Location</p><p>Expertise</p><p>Date</p></ColumnTextDiv>
                <ColumnTextDiv><p>Name</p><p>Entity</p><p>Location</p><p>Expertise</p><p>Date</p></ColumnTextDiv>
                <ColumnTextDiv><p>Name</p><p>Entity</p><p>Location</p><p>Expertise</p><p>Date</p></ColumnTextDiv>
                <ColumnTextDiv><p>Name</p><p>Entity</p><p>Location</p><p>Expertise</p><p>Date</p></ColumnTextDiv>
            </ProposalsDiv>
        </div>
    )
};