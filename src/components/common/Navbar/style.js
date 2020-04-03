import styled from 'styled-components'
import is from 'styled-is'

import { Container, inverted } from '@components/global'

export const Nav = styled.nav`
  ${inverted};
  padding: 16px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};

  a {
    text-decoration: none;
    opacity: 0.7;
    color: ${props => props.theme.color.black.inverted};
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`

export const MobileMenu = styled.div`
  width: 100%;
  ${inverted};
`

export const Brand = styled.div`
  font-family: ${props => props.theme.font.primary};
  ${props => props.theme.font_size.large};
  a {
    text-decoration: none;
    color: ${props => props.theme.color.black.regular};
  }
`

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }

  ${is('hide')`
    display: block;

    @media (max-width: ${props => props.theme.screen.md}) {
      display: none;
    }
  `}
`
