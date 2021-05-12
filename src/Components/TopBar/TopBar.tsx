import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";
import Search from "./Components/Search/Search";
import useDropdown from 'react-dropdown-hook';
import {DropDownMenu} from "./Components/DropDownMenu/DropDownMenu";

const Wrapper =styled.div`
    width: 100%;
    box-shadow: 1px 1px 12px ${Colors.black};
    display: flex;
    background-color: white;
`;

const LeftSection =styled.div`
    display: flex;
    width: 20%;
    padding-left: 1%;
    align-items: center;
        &:hover {
            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);
        }  
`;

const Logo = styled.div`
    img{
        height: 30px;
    }
`;

const Home = styled.div`
    padding-left: 5%;
`

const HomeInscription = styled.div`
    padding-left: 3%;
    padding-right: 50%;

`


const NotificationsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 20%;
    padding: 0.2%;
    padding-right: 2%;
  `;


const NotificationButtons = styled.div`
    background-color: lightgray;
        :hover {
            box-shadow: inset 0px 0px 190px -42px rgba(0,0,0,0.2);
        }  
    padding: 3%;
    margin-left: 2%;
    display: flex;
    border-radius: 50%;
    align-items: center;
`;


const NotifyBadge = styled.div`
    position: absolute;
    background-color: lightskyblue;
    opacity: 0.8;
    padding: 0.2%;
    margin-bottom: 1.5%;
    margin-left: 1%;
    border-radius: 50%;
    font-size: 12px;
`

const Arrow = styled.div`
    display: flex;
    justify-content: flex-end;
    img {
    :hover {
          cursor: pointer;
  }  
  }
`;


export const TopBar: FC = () => {
    const[wrappRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    }

    return(
        <Wrapper>
            <LeftSection ref={wrappRef} onClick={menuHandler}>
                <Logo>
                    <img src='/logo.png'/>
                </Logo>
                <Home>
                    <img src='./icons/house2.png'/> 
                </Home>
                <HomeInscription>Home</HomeInscription>
                <Arrow>
                    <img src='./icons/arrow-down.svg' alt="Drop down menu arrow"></img>
                </Arrow>
                {dropdownOpen && <DropDownMenu></DropDownMenu>}
            </LeftSection>

            
                <Search></Search>
            
                <NotificationsWrapper>
                    <NotificationButtons>
                        <img src="./icons/house.png"/>
                    </NotificationButtons>

                    <NotificationButtons>
                        <img src="./icons/comments.png"/>
                        <NotifyBadge>2</NotifyBadge>
                    </NotificationButtons>
                    

                    <NotificationButtons>
                        <img src="./icons/bell.png"/>
                        <NotifyBadge>12</NotifyBadge>
                    </NotificationButtons>
                </NotificationsWrapper>
            
        </Wrapper>
    )
};

export default TopBar;