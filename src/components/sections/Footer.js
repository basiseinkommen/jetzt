import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { Container, inverted } from '@components/global'
import ExternalLink from '@common/ExternalLink'

import { ReactComponent as GithubIcon } from '@static/icons/github.svg'
import { ReactComponent as InstagramIcon } from '@static/icons/instagram.svg'
import { ReactComponent as TwitterIcon } from '@static/icons/twitter.svg'

const SOCIAL = [
  {
    Icon: GithubIcon,
    link: 'https://github.com/basiseinkommen/jetzt'
  },
  {
    Icon: InstagramIcon,
    link: 'https://instagram.com/basiseinkommen'
  },
  {
    Icon: TwitterIcon,
    link: 'https://twitter.com/basiseinkommen'
  }
]

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>Basiseinkommen</h2>
              <p>
                Ein Projekt im Rahmen des
                {` `}
                <ExternalLink href="https://wirvsvirushackathon.org/">
                  #WirVsVirus Hackathon
                </ExternalLink>
              </p>
              <Link to="/impressum">Impressum</Link>
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ Icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <Icon />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
)

const SocialIcons = styled.div`
  display: flex;

  svg {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`

const FooterWrapper = styled.footer`
  ${inverted};
  padding: 32px 0;
`

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.white.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`

export default Footer
