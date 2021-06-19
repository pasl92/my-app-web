import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";
import {fontSize} from "../../../styledHelpers/FontSizes";
import { FC, useState, useEffect } from 'react';



const ExpertiseSectionsDiv = styled.div`
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

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    p{
        color: gray;
        padding: 1%;
        margin-bottom: 0.5%;
        margin-top: 2%;
    }
    h3{
        background-color: whitesmoke;
        color: ${Colors.lightBlue};
        width: max-content;
        padding: 2%;
        border-radius: 10px;;
        font-weight: 550;
        margin-right: 2%;
        box-shadow: 0px 1px 1px ${Colors.black};
    }
`;

const ManyInfoDiv = styled.div`
    display: flex;
`;



export const ExpertiseSections: FC = () => {


    return(
        <ExpertiseSectionsDiv>
            <InfoSection><p>Expertise</p> <h3>Mergers and acquisition</h3></InfoSection>
            <InfoSection><p>Specialites</p>
                <ManyInfoDiv><h3>Cross border operation</h3> <h3>Transaction over 500M$</h3></ManyInfoDiv>
            </InfoSection>
            <InfoSection><p>Admission to practice law</p>
                <ManyInfoDiv><h3>Paris bar association</h3> <h3>Tunisian bar association</h3></ManyInfoDiv>
            </InfoSection>
            <InfoSection><p>Countries</p> 
                <ManyInfoDiv><h3>Tunisia</h3> <h3>Poland</h3> <h3>Italy</h3></ManyInfoDiv>
            </InfoSection>

        </ExpertiseSectionsDiv>
    )
};