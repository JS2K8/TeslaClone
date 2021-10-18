import styled from "styled-components";
import { useState } from "react";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {

    const [sideStatus,setSideStatus] = useState(false)
    const cars = useSelector(selectCars)

    const showSideBar = (e) => {
        e.preventDefault();
        setSideStatus(true);
    }

    const hideSideBar = (e) => {
        e.preventDefault();
        setSideStatus(false);
    }

  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="" width="110px" height="15px" />
      </a>
      <Menu>
      {cars && cars.map((car, index) => (
        <a key={index} href="#">{car}</a>
      ))}
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Account</a>
        <a href="" onClick={showSideBar} >Menu</a>
      </RightMenu>
      <SideNav show={sideStatus}>
        <Xbox>
            <h1 onClick={hideSideBar}>x</h1>
        </Xbox>
        <MenuItems>          
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Find Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Investor Relations</a></li>
        </MenuItems>
      </SideNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 55px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  margin-left: 40px
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 80px;

  a {
    font-weight: 900;
    padding: 0 16px;
    flex-wrap: no-wrap;
    font-size: 14px;
  }
`;

const RightMenu = styled.div`
    

  a {
    font-weight: 900;
    padding: 0 16px;
    flex-wrap: no-wrap;
    font-size: 14px;
  }
`

const SideNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 100;
    box-shadow: -2px 0px 15px -8px #000000;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li {
        width: 100%;
    }
`

const Xbox = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 30px;
    font-size: 12px;

    h1 {
        cursor: pointer;
    }
`

const MenuItems = styled.div`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: left;

    li {
        padding: 13px 50px;
        font-size: 14px;
        font-weight: 700;
        width: 100%;
    }
`