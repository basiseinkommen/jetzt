import React from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Section, Container } from '@components/global'
import ExternalLink from '@common/ExternalLink'
import FaqItem from '@common/FaqItem'

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
              <h2>Wer sind Wir?</h2>
              <p>
                Der{' '}
                <ExternalLink href="https://wirvsvirushackathon.org/">
                  #WirVsVirus Hackathon
                </ExternalLink>{' '}
                vom 20. bis 22. März 2020, der unter der Schirmherrschaft der
                Bundesregierung lief, hat von etwa 42.000 Teilnehmer:innen 82
                Personen aus unterschiedlichster Berufen, aber mit derselben
                Berufung zusammengeführt. Gemeinsam haben wir uns einer der
                dringendsten gesellschaftlichen Herausforderungen gestellt: Wie
                gehen wir mit den finanziellen und existenziellen Ängsten von
                uns allen um, die sich in einer solchen Krisenzeit etablieren?
                Während des Hackathons haben wir innerhalb von zwei Tagen und
                Nächten einen ganz konkreten Lösungsansatz konzipiert: Das
                Basiseinkommen.
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
              <h2>Warum brauchen wir das Basiseinkommen?</h2>
              <p>
                Die Corona-Pandemie stellt die Welt vor eine noch nie dagewesene
                Herausforderung. Auch in Deutschland drängt die aktuelle Krise
                viele Bürger:innen an ihre persönlichen und finanziellen
                Grenzen. Das von der Bundesregierung geplante Konjunkturpaket
                hilft nicht allen wirtschaftlich Betroffenen. Sei es der
                Blumenhändler, der sein Geschäft nicht mehr aufmachen darf und
                die Miete für seine Wohnung trotzdem weiter zahlen muss. Oder
                die Angestellte, die ihren Job in der Probezeit direkt wieder
                verloren hat, aber die Familie durchbringen muss. Die
                Corona-Krise verstärkt Existenzängste und schafft neue
                finanzielle Notsituationen.
              </p>
              <FaqItem title="Von der Angst">
                Eine kollektive, existenzielle Angsterfahrung, wie wir sie in
                der aktuellen Krise erleben, hat nachhaltige Auswirkungen für
                jede:n Einzelne:n. Angst ist eine zumeist als negativ empfundene
                Emotion, die uns zu Höchstleistungen hinsichtlich Vermeidungs-,
                Flucht- oder Kampfverhalten treibt. Im Extrem entspricht Angst
                bildlich gesprochen einem Diktator, der alle anderen
                Gehirnaktivitäten (von der Wahrnehmung bis zur Atmung)
                versklavt. Assoziationen mit Angst sind die am schnellsten
                erlernten, am besten gespeicherten und am leichtesten wieder
                abrufbaren Assoziationen. Negative Erfahrungen wiegen
                neurowissenschaftlich stärker. Um eine negative Erfahrung
                psychisch zu verarbeiten, braucht es ein Vielfaches an positiven
                Erfahrungen im Anschluss.
              </FaqItem>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
                Einige sagen Helikoptergeld, andere Grundeinkommen - wir möchten
                das Basiseinkommen Realität werden lassen und diejenigen in
                dieser Krise unterstützen, die uns als Gesellschaft jetzt
                brauchen.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
                Menschen, die durch ein Basiseinkommen unterstützt werden,
                können die aktuell gewonnene freie Zeit einbringen, um die Krise
                zu bewältigen und der Gesellschaft etwas zurückzugeben.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
                Die Corona-Pandemie stellt die Welt vor eine noch nie dagewesene
                Herausforderung. Auch in Deutschland drängt die aktuelle
                Situation viele Bürgerinnen und Bürger an den Rand des
                wirtschaftlichen Abgrunds. Ein unbürokratisches Basiseinkommen
                sichert das Überleben und lindert Existenzängste in schweren
                Zeiten der Krise.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
                Gesellschaftliche Effekte globaler Krisen treten zeitverzögert
                auf und machen sich erst später bemerkbar. Eine Explosion der
                Arbeitslosenzahlen, Lawinen an Privat- und Betriebsinsolvenzen
                sowie eine Überlastung der Pflege- und Gesundheitsbranche sind
                uns nach der Corona-Pandemie garantiert. Eine Stimme für das
                Basiseinkommen sichert private Existenzen und stärkt die
                Konjunktur.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
                Not macht erfinderisch - noch nie waren schnelle Entscheidungen
                so stark gefragt wie heute. Ein bedarfsunabhängiges
                Basiseinkommen lindert Existenzängste und schafft eine
                einzigartige Möglichkeit für Betroffene, sich in Zeiten der
                Krise auf das Wohl der Gemeinschaft zu konzentrieren.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
                Freelancer, Gastronomen, Studenten und freischaffende Künstler
                sind nur ein kleiner Teil der wirtschaftlich Betroffenen durch
                die Corona-Pandemie. Unsere Gesellschaft lebt von der Diversität
                und unsere Wirtschaft von Interdependenzen - jedes Kettenglied
                ist so einzigartig wie essentiell. Ein Massenzusammenbruch
                privater Existenzen kann durch das Basiseinkommen verhindert
                werden - schnell und unbürokratisch. Jede Stimme zählt.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
)

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`

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
`

export default About
