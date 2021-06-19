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


export const AmountOfFees: FC = () => {


    return(
        <div>
            <TitleDiv>Amount of fees</TitleDiv>
            <ProposalsDiv>
                <ColumnNameDiv><p>Year</p><p>Cost center</p><p>Total amount</p><p>Law firm</p></ColumnNameDiv>

                <ColumnTextDiv><p>2019</p><p>SC 153</p><p>2500$</p><p>Linklaters</p></ColumnTextDiv>
                <ColumnTextDiv><p>2018</p><p>SC 153</p><p>3500$</p><p>Linklaters</p></ColumnTextDiv>
                <ColumnTextDiv><p>2017</p><p>SC 153</p><p>4500$</p><p>Linklaters</p></ColumnTextDiv>
                <ColumnTextDiv><p>2016</p><p>SC 153</p><p>5500$</p><p>Linklaters</p></ColumnTextDiv>
            </ProposalsDiv>
        </div>
    )
};