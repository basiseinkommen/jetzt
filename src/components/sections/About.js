import React from 'react';
import styled from 'styled-components';
import is from 'styled-is';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <p>
                “Jeder Mensch zählt”, sagte die Bundeskanzlerin am 18.3.2020. “Jeder Mensch zählt” bedeutet auch, dass jeder Mensch existenziell abgesichert werden muss. Das gilt insbesondere in einer Krise. Die meistern wir nur zusammen als Gesellschaft, als Solidargemeinschaft, als Bevölkerung in Deutschland.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
              Viele Menschen sind derzeit in Deutschland an ihren persönlichen Grenzen. Nehmen wir den Krankenpfleger, der täglich mehr als die üblichen 8 Stunden arbeitet. Seine Kollegen sind erkrankt und er möchte die Menschen auf seiner Station nicht im Stich lassen. Oder die Blumenhändlerin, die ihr Geschäft nicht mehr aufmachen darf und gleichzeitig Miete zahlen und die Familie durchbringen muss. Finanzielle Sorgen, Existenzängste und eine Gesellschaft, die sich mehr auf ihre Einzelbedürfnisse konzentriert, als die Gemeinschaft voran zu bringen.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
              Einige sagen Helikoptergeld, andere Grundeinkommen - wir möchten das Basiseinkommen Realität werden lassen und diejenigen in dieser Krise unterstützen, die uns als Gesellschaft jetzt brauchen.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <div>
              <p>
                Menschen, die durch ein Basiseinkommen unterstützt werden, können die aktuell gewonnene freie Zeit einbringen, um die Krise zu bewältigen und der Gesellschaft etwas zurückzugeben.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
                Die Corona-Pandemie stellt die Welt vor eine noch nie dagewesene Herausforderung. Auch in Deutschland drängt die aktuelle Situation viele Bürgerinnen und Bürger an den Rand des wirtschaftlichen Abgrunds. Ein unbürokratisches Basiseinkommen sichert das Überleben und lindert Existenzängste in schweren Zeiten der Krise.
              </p>
            </div>
          </Grid>
          <Grid inverse>
            <div>
              <p>
                Gesellschaftliche Effekte globaler Krisen treten zeitverzögert auf und machen sich erst später bemerkbar. Eine Explosion der Arbeitslosenzahlen, Lawinen an Privat- und Betriebsinsolvenzen sowie eine Überlastung der Pflege- und Gesundheitsbranche sind uns nach der Corona-Pandemie garantiert. Eine Stimme für das Basiseinkommen sichert private Existenzen und stärkt die Konjunktur.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
                Not macht erfinderisch - noch nie waren schnelle Entscheidungen so stark gefragt wie heute. Ein bedarfsunabhängiges Basiseinkommen lindert Existenzängste und schafft eine einzigartige Möglichkeit für Betroffene, sich in Zeiten der Krise auf das Wohl der Gemeinschaft zu konzentrieren.
              </p>
            </div>
          </Grid>
          <Grid inverse>
            <div>
              <p>
                Freelancer, Gastronomen, Studenten und freischaffende Künstler sind nur ein kleiner Teil der wirtschaftlich Betroffenen durch die Corona-Pandemie. Unsere Gesellschaft lebt von der Diversität und unsere Wirtschaft von Interdependenzen - jedes Kettenglied ist so einzigartig wie essentiell. Ein Massenzusammenbruch privater Existenzen kann durch das Basiseinkommen verhindert werden - schnell und unbürokratisch. Jede Stimme zählt.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${is('inverse')`
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${is('inverse')`
      ${Art} {
        order: 2;
      }
    `}
  }
`;

export default About;
