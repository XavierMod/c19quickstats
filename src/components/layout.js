import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { Link } from 'gatsby'

const Content = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 10px;
`;

const Wrapper = styled.div``;

const NavBar = styled.div`
  display: flex;
  padding: 25px;
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  
  ul {
    flex: 100%;
    text-align: center;
  }

  ul li {
    display: inline-block;
    margin: 0 10px;
    font-weight: 700;
    opacity: 1;
    font-size: 13px;

    a {
      text-decoration: none;
      color: black;
      opacity: 0.4;
    }
  }
`;

const Banner = styled.div`
  background-color: rgb(3, 148, 252);
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;

  a {
    color: white;
    margin: 0 5px;
  }
`;

const Footer = styled.div`
  color: red;
  font-size: 11px;
  text-align: center;
  color: black;
  margin: 20px 0;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Banner>C-19 Quick Stats, by <a href="https://www.xaviermod.com" target="_blank">xaviermod.com </a></Banner>
      <NavBar>
        <ul>
          <li><Link activeStyle={{ opacity: '1' }} to="/"> Tracker</Link></li>
          <li><Link activeStyle={{ opacity: '1' }} to="/map">Map</Link></li>
          <li><Link activeStyle={{ opacity: '1' }} to="/who-tweets">News</Link></li>
          <li><Link activeStyle={{ opacity: '1' }} to="/wiki">Wiki</Link></li>
          <li><Link activeStyle={{ opacity: '1' }} to="/about">About</Link></li>
        </ul>
      </NavBar>
      <Content>
      {children}
      </Content>
      <Footer>All data is being served from <a href="https://github.com/pomber/covid19">GitHub</a>. Updated every 24h</Footer>
    </Wrapper>
  )
}
export default Layout
