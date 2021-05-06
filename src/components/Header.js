import React from 'react';
import { FaHome, FaSearch, FaPlus, FaStar } from 'react-icons/fa';
import { RiMovie2Line, RiTvLine } from 'react-icons/ri';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a>
          <FaHome className='icon' />
          &nbsp;
          <span>HOME</span>
        </a>
        <a>
          <FaSearch className='icon' />
          &nbsp;
          <span>SEARCH</span>
        </a>
        <a>
          <FaPlus className='icon' />
          &nbsp;
          <span>WATCHLIST</span>
        </a>
        <a>
          <FaStar className='icon' />
          &nbsp;
          <span>ORIGINALS</span>
        </a>
        <a>
          <RiMovie2Line className='icon' />
          &nbsp;
          <span>MOVIES</span>
        </a>
        <a>
          <RiTvLine className='icon' />
          &nbsp;
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Profile src='/images/mlr.jpeg' />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 36px;
  height: 70px;
  background-color: #090b13;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    .icon {
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const Profile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
