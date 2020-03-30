import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import logo from '@images/logo.svg'
import mp4 from '@videos/basiseinkommen.mp4'
import webm from '@videos/basiseinkommen.webm'

import { Container } from '@components/global'

/* eslint-disable jsx-a11y/media-has-caption */

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <video controls poster={logo}>
                <source src={mp4} type="video/mp4" />
                <source src={webm} type="video/webm" />
              </video>
            </Art>
            <Text>
              <h1>Basiseinkommen jetzt!</h1>
              <p>
                Ein Basiseinkommen als Rettungsprogramm für alle Menschen in
                Deutschland während der Corona-Krise.
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
)

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding: 96px 0;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 128px 0;
  }
`

const Art = styled.figure`
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  margin: 0;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    background-color: white;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`

export default Header
