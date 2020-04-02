import React from 'react'
import styled from 'styled-components'

import logo from '@images/logo.svg'
import mp4 from '@videos/basiseinkommen.mp4'
import webm from '@videos/basiseinkommen.webm'

import { Container, inverted } from '@components/global'

/* eslint-disable jsx-a11y/media-has-caption */

const Header = () => (
  <HeaderWrapper>
    <Container>
      <h1>
        Basiseinkommen. Grundsätzlich für alle. <strong>Jetzt!</strong>
      </h1>
      <Grid>
        <Art>
          <video controls poster={logo}>
            <source src={mp4} type="video/mp4" />
            <source src={webm} type="video/webm" />
          </video>
        </Art>
        <Text>
          <p>
            “Jeder Mensch zählt”, sagte die Bundeskanzlerin in ihrer
            Pressemitteilung am 18.3.2020. “Jeder Mensch zählt” bedeutet für
            uns, dass jeder Mensch existenziell abgesichert werden muss. Das
            gilt insbesondere in einer Krise. Diese meistern wir nur zusammen,
            als Gesellschaft, in der tatsächlich jeder Einzelne sich als einen
            Teil innerhalb der Solidargemeinschaft erlebt und zählt.
          </p>
        </Text>
      </Grid>
    </Container>
  </HeaderWrapper>
)

const HeaderWrapper = styled.header`
  ${inverted};

  padding: 64px 0 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 64px 0 128px;
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
