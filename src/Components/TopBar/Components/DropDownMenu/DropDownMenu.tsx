import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import { fontSize } from "../../../../styledHelpers/FontSizes";
import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    top: 4%;
    left: 16%;
    background-color: white;
    border:1px solid gray;
    #filterInput{
        width:100%;
        height:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        input{
        height: 40%;
        width: 80%;
        font-size: ${fontSize[18]};
        outline:none;
        }
    }
`;

const InnerWarpper = styled.div`
    overflow-y: scroll;
    max-height: 250px;
    
`;

const MenuItem = styled.div`

    display:flex;
    justify-content:start;
    align-items:center;
    margin: 2%;
    text-decoration: none;
    a {
        text-decoration:none;
        color: black;
        }
    img{
        height: 25px;
        width:25px;
        margin-right: 20px;
    }
    p{
        margin: 2px 2px;
        font-size: ${fontSize[16]};
        
    }
    &:hover {
            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);
        }  
`;

const AccountWrapper = styled.div`
`;

const TitleMenuItem = styled.div`
    font-size: ${fontSize[14]};
    font-weight: bold;
    color: gray;
    margin: 3%;
    margin-bottom: 5%;
`;

export const DropDownMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    return (
        <Wrapper>
            <div id="filterInput">
                <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter..." />
            </div>
            <InnerWarpper>
                <TitleMenuItem><p>Platform</p></TitleMenuItem>
                {
                    'Home'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem ><img src='./icons/house2.png'/><a href="MainPage">Home</a></MenuItem>
                }
                {
                    'Publication'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem>  <img src='./icons/publications.png'/> <a href="testsite">Publication</a></MenuItem>
                }
                {
                    'People'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/people.png'/> <a href="TestSite">People</a> </MenuItem>
                }
                {
                    'Entities'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities2.png'/> <a href="Entities">Entities</a></MenuItem>
                }
                {
                    'Administration'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/administration.png'/> <a href="TestSite">Administration</a></MenuItem>
                }
                <TitleMenuItem><p>Workspaces</p></TitleMenuItem>
                {
                    'Client contract'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities2.png'/> <a href="TestSite">Client contract</a></MenuItem>
                }
                {
                    'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities2.png'/> <a href="TestSite">Supplier contract</a></MenuItem>
                }
                {
                    'Corporate'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities.png'/> <a href="TestSite">Corporate</a></MenuItem>
                }
                {
                    'Group norms'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/people.png'/> <a href="TestSite">Group norms</a> </MenuItem>
                }
                {
                    'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./icons/entities.png'/> <a href="TestSite">Real estate contracts</a></MenuItem>
                }
                
            </InnerWarpper>
                <AccountWrapper>
                    <hr></hr>
                    <TitleMenuItem><p>Account</p></TitleMenuItem>
                        {
                            <MenuItem> <img src='./testimagepublications.png'/> <a href="MyProfile">Profile</a></MenuItem>
                        }
                        {
                            <MenuItem> <img src='./icons/privacy.png'/> <a href="testsite">Privacy</a></MenuItem>
                        }
                        {
                            <MenuItem> <img src='./icons/settings.png'/> <a href="testsite">Settings</a></MenuItem>
                        }
                        <hr></hr>
                        {
                            <MenuItem> <img src='./icons/logout.png'/> <a href="testsite">Logout</a> </MenuItem>
                        }
                </AccountWrapper>
        </Wrapper>
    )
}




