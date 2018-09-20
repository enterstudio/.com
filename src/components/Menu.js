import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { slide as SideMenu } from 'react-burger-menu'
import Social from '../components/Social'

const Nav = styled.nav`
  background: ${props => props.theme.colors.base};
  opacity: 0.95;
  backdrop-filter: blur(50px);
  width: 100%;
  height: 3.5rem;
  position: fixed;
  border-bottom: 1px ${props => props.theme.colors.tertiary};
  left: 0;
  top: 0;
  z-index: 998;
  transition: 0.5s ease;
`
const Title = styled(Link)`
  text-decoration: none;
  display: inline-block;
  h1 {
    text-transform: uppercase;
    font-size: 1rem;
    padding: 1.25rem 2rem;
  }
`
const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 3.5rem;
  height: 3.5rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  transition: 0.5s ease;
  div {
    .bm-overlay {
      background: ${props => props.theme.colors.tertiary} !important;
      opacity: 0.95;
      backdrop-filter: blur(50px);
      left: 0;
    }
    .bm-menu {
      padding: 2rem 0;
      color: ${props => props.theme.colors.base};
    }
    .bm-cross {
      background: ${props => props.theme.colors.base} !important;
      height: 2rem !important;
      width: 0.35rem !important;
    }
    .bm-cross-button {
      height: 2rem !important;
      width: 2rem !important;
      top: 0.5rem !important;
      right: 2rem !important;
    }
    .bm-burger-bars {
      background: ${props => props.theme.colors.tertiary};
      height: 0.35rem;
      opacity: ${props => (props.isOpen ? '0' : '1')};
    }
    .bm-burger-button {
      position: relative;
      width: 1.5rem;
      height: 1.5rem;
      top: 1rem;
    }
  }
`

const MenuMobile = styled(SideMenu)`
  padding: 4rem 0;
  z-index: 999;
  text-align: right;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
  }
  li {
    display: block;
    margin: 0 2rem;
    padding: 0.618rem 0;
    text-align: right;
  }
  a {
    text-decoration: none;
    padding: 1rem;
    transition: all 0.5s;
    color: ${props => props.theme.colors.base};
    text-transform: uppercase;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
  img {
    display: inline-block;
  }
  section {
    margin: 0;
    div {
      padding: 0;
    }
  }
  svg {
    text-align: right;
    transition: all 0.2s;
    fill: ${props => props.theme.colors.base};
    &:hover {
      fill: ${props => props.theme.colors.highlight};
    }
  }
`

const Menu = () => {
  return (
    <Nav>
      <Title to="/">
        <h1>I Am Matthias</h1>
      </Title>
      <Header>
        <MenuMobile right width={'100%'} isOpen={false}>
          <ul>
            <li>
              <h2>
                <Link to="/">Portfolio</Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link to="/blog">Blog</Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link to="/contact">Contact</Link>
              </h2>
            </li>
            <li>
              <Social />
            </li>
            <li>
              <a
                href="https://www.contentful.com/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <img
                  src="https://images.ctfassets.net/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg"
                  style={{ width: '100px' }}
                  alt="Powered by Contentful"
                />
              </a>
              <a
                href="https://www.netlify.com"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <img
                  src="https://cdn.netlify.com/1ed63b33731af09d707f4ecad8e805df905104ec/9f1a1/img/press/logos/full-logo-dark-simple.svg"
                  style={{ width: '100px' }}
                  alt="Netlify"
                />
              </a>
            </li>
          </ul>
        </MenuMobile>
      </Header>
    </Nav>
  )
}

export default Menu