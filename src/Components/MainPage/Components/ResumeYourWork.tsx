import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";
import Search from "../../TopBar/Components/Search/Search";
import {fontSize} from "../../../styledHelpers/FontSizes";

const ResumeYourWorkDiv = styled.div`
    margin-top: 3%;
    display: flex;
    flex-direction: column;
`;

const TopSection = styled.div`
    display: flex;
    margin-bottom: 1%;
    align-items: center;
`;

const ResumeYourWorkTitle = styled.div`
    display: flex;
    margin-bottom: 0%;
    margin-left: 3%;
    margin-right: 5%;
    font-size: ${fontSize[24]};
    font-weight: bold;
`;

const Fallowed = styled.div`
`;

const PostsSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    padding: 0.5%;
    margin-bottom: 0.5%;
    margin-left: 1%;
    margin-right: 1%;
    box-shadow: 0px 2px 5px ${Colors.black};
    &:hover {
            box-shadow: 0px 4px 20px ${Colors.black};
        } 
`;

const PostsSectionTitle = styled.div`
    color: ${Colors.lightBlue};
    font-size: ${fontSize[14]};
    font-weight:bold;
    margin-bottom: 0.5%;
`;

const PostsSectionText = styled.div`
`;

const PostsSectionBottom = styled.div`
    color: ${Colors.grey};
    font-size: ${fontSize[12]};
    margin-top: 0.5%;
`;
export const ResumeYourWork: FC = () => {
    return(
        <ResumeYourWorkDiv>
            <TopSection>
                <ResumeYourWorkTitle>Resume your Work</ResumeYourWorkTitle>
                <Search></Search>
                <Fallowed>Fallowed...</Fallowed>
            </TopSection>

            <PostsSection>
                <PostsSectionTitle>Word company SAS</PostsSectionTitle>
                <PostsSectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</PostsSectionText>
                <PostsSectionBottom>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</PostsSectionBottom>
            </PostsSection>

            <PostsSection>
                <PostsSectionTitle>Word company SAS</PostsSectionTitle>
                <PostsSectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</PostsSectionText>
                <PostsSectionBottom>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</PostsSectionBottom>
            </PostsSection>

            <PostsSection>
                <PostsSectionTitle>Word company SAS</PostsSectionTitle>
                <PostsSectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</PostsSectionText>
                <PostsSectionBottom>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</PostsSectionBottom>
            </PostsSection>

            <PostsSection>
                <PostsSectionTitle>Word company SAS</PostsSectionTitle>
                <PostsSectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</PostsSectionText>
                <PostsSectionBottom>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</PostsSectionBottom>
            </PostsSection>

            <PostsSection>
                <PostsSectionTitle>Word company SAS</PostsSectionTitle>
                <PostsSectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</PostsSectionText>
                <PostsSectionBottom>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</PostsSectionBottom>
            </PostsSection>

            <PostsSection>
                <PostsSectionTitle>Word company SAS</PostsSectionTitle>
                <PostsSectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</PostsSectionText>
                <PostsSectionBottom>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</PostsSectionBottom>
            </PostsSection>

            <PostsSection>
                <PostsSectionTitle>Word company SAS</PostsSectionTitle>
                <PostsSectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</PostsSectionText>
                <PostsSectionBottom>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</PostsSectionBottom>
            </PostsSection>

            <PostsSection>
                <PostsSectionTitle>Word company SAS</PostsSectionTitle>
                <PostsSectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</PostsSectionText>
                <PostsSectionBottom>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</PostsSectionBottom>
            </PostsSection>

            <PostsSection>
                <PostsSectionTitle>Word company SAS</PostsSectionTitle>
                <PostsSectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</PostsSectionText>
                <PostsSectionBottom>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</PostsSectionBottom>
            </PostsSection>

            <PostsSection>
                <PostsSectionTitle>Word company SAS</PostsSectionTitle>
                <PostsSectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</PostsSectionText>
                <PostsSectionBottom>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</PostsSectionBottom>
            </PostsSection>

            <PostsSection>
                <PostsSectionTitle>Word company SAS</PostsSectionTitle>
                <PostsSectionText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</PostsSectionText>
                <PostsSectionBottom>Subsid.corp.   +   Client contact   +   Update 3 days aqo by John doe</PostsSectionBottom>
            </PostsSection>
            
        </ResumeYourWorkDiv>
    )
};

export default ResumeYourWork;