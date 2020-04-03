import styled, { css } from 'styled-components'
import is from 'styled-is'

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  h1 {
    margin: 0 auto 40px;
  }

  h2,
  h3,
  p {
    margin: 20px auto;
  }

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${is('fluid')`
    max-width: 1200px !important;
  `};
`

export const inverted = css`
  background-color: ${props => props.theme.color.white.inverted};
  &,
  p,
  a,
  svg {
    color: ${props => props.theme.color.black.inverted};
  }
`

export const Section = styled.section`
  padding: 128px 0;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 96px 0;
  }

  ${is('accent')`
    background-color: ${props =>
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary}`};

  ${is('inverted')`
      ${inverted};
  `};
`
