import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";
import {fontSize} from "../../../styledHelpers/FontSizes";
import { FC, useState, useEffect } from 'react';



const PanelInformationsDiv = styled.div`
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

const TitleDiv = styled.div`
    font-weight: 550;
    margin-left: 5%;
    margin-bottom: 1%;
`;

const ManyInternationalInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContractorDiv = styled.div`
    display: flex;
    background-color: whitesmoke;
    border-radius: 10px;;
    font-weight: 550;
    margin-right: 2%;
    margin-bottom: 2%;
    box-shadow: 0px 1px 1px ${Colors.black};
    align-items: center;
    width: 50%;
    img{
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin-left: 3%;
        margin-right: 2%;
        padding: 1%1%;
    }
    h2{
        color: ${Colors.lightBlue};
        width: max-content;
        font-weight: 550;
        margin-right: 2%;
    }
    p{
        color: gray;
        padding: 0%;
        margin-bottom: 0%;
        margin-top: 0%;
        margin-left: 4%;
    }
`;

export const PanelInformations: FC = () => {


    return(
        <div>
            <TitleDiv>Panel Informations</TitleDiv>
            <PanelInformationsDiv>
                <InfoSection><p>Hourly fee</p> <h3>610$ / hour</h3></InfoSection>
                <InfoSection><p>Terms and conditions</p>
                    <ManyInfoDiv><h3>Monthly 10k$ retainer - see with Jeanny Smith</h3> </ManyInfoDiv>
                </InfoSection>
                <InfoSection><p>Services and projexts</p>
                    <ManyInfoDiv><h3>Corporate M&A and international acquisitions</h3> </ManyInfoDiv>
                </InfoSection>
                <InfoSection><p>Internal correspondants</p> 
                    <ManyInternationalInfoDiv>
                        <ContractorDiv><img src='./testimagepublications.png'alt='Logo'/><h2>Janusz Tracz</h2> <p>Message</p> <p>Profile</p></ContractorDiv>
                        <ContractorDiv><img src='./testimagepublications.png'alt='Logo'/><h2>Adam Skock</h2> <p>Message</p> <p>Profile</p></ContractorDiv>
                        <ContractorDiv><img src='./testimagepublications.png'alt='Logo'/><h2>Jan Kowalski</h2> <p>Message</p> <p>Profile</p></ContractorDiv>
                    </ManyInternationalInfoDiv>
                </InfoSection>
            </PanelInformationsDiv>
        </div>
    )
};