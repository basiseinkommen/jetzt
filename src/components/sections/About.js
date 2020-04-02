import React from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import all_the_data from '@images/art/all_the_data.svg'
import work_together from '@images/art/work_together.svg'

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
              <img src={work_together} alt='' />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <img src={all_the_data} alt='' />
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
              <p>
                Gesellschaftliche Effekte globaler Krisen treten zeitverzögert
                auf und machen sich erst später bemerkbar. Die Überlastung des
                Gesundheits- und Pflegebereichs zeichneten sich bereits vor der
                Pandemie ab und spitzen sich nun dramatisch zu. In anderen
                Bereichen kommen nach der Corona-Pandemie und zum Teil bereits
                jetzt eine Explosion der Arbeitslosenzahlen, Lawinen an Privat-
                und Betriebsinsolvenzen auf uns zu. Für die Wirtschaft bedeutet
                dies, dass die Kaufkraft vieler von uns nicht nur während,
                sondern auch noch nach der Krise niedrig bleibt. Ein
                bedarfsunabhängiges Basiseinkommen kann diesen Effekten entgegen
                wirken. Eine Weiterführung von drei bis sechs Monaten nach
                Überwindung der Krise ist deshalb zu prüfen.
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
              <h2>Was bedeutet das Basiseinkommen für mich?</h2>
              <p>
                Ziel des Basiseinkommens ist es, die Existenz aller in
                Deutschland wohnhaften Personen finanziell zu sichern. Das
                bedeutet konkret: Du sowie jede andere Person, der in
                Deutschland eine Steueridentifikationsnummer zugeteilt ist,
                erhält für eine Dauer von sechs Monaten, mindestens aber solange
                die Pandemie andauert monatlich 1.000 Euro Basiseinkommen pro
                Person. Und zwar ohne Bedarfsprüfung. BAföG, Kindergeld und
                Renten werden bis zur Höhe des Basiseinkommens mit diesem
                verrechnet. Bei Sozialleistungen, die sich am Einkommen der
                Person bemessen (beispielsweise ALG II/SGB II, SGB XII), wird
                das Basiseinkommen als Einkommen angerechnet. So wird
                sichergestellt, dass auch diejenigen Menschen, die welche diese
                Leistungen erhalten, am Basiseinkommen teilhaben.
              </p>
              <p>
                Unsere Gesellschaft lebt von der Diversität und unsere
                Wirtschaft von Interdependenzen: Jedes Kettenglied ist so
                einzigartig wie essentiell. Ein Zusammenbruch privater
                Existenzen in dem zu erwartenden Ausmaß kann durch das
                Basiseinkommen verhindert werden. 1000 € pro Monat für dich, für
                uns alle - ein Vertrauensvorschuss, finanzielle Unterstützung
                und Anerkennung in Form des Basiseinkommens. Das Geld soll dir
                und uns allen dabei helfen, finanzielle und existenzielle Sorgen
                und Ängste einzudämmen, unser Potenzial zu entfalten,
                gesellschaftliche Teilhabe zu sichern und der Gesellschaft etwas
                zurückzugeben, sodass wir die Krise gemeinsam bewältigen -
                solidarisch und zuversichtlich.
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
              <h2>Was bedeutet das Basiseinkommen für den Staat?</h2>
              <p>
                Der Staat wird durch die Einführung des Basiseinkommens Ausgaben
                in Höhe von 1000 € pro in Deutschland lebender Person mit
                Steueridentifikationsnummer haben für einen Mindestzeitraum von
                sechs Monaten, mindestens aber solange die Krise andauert.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Wie kann das funktionieren?</h2>
              <p>
                Was erst einmal nach einer horrenden Summe klingt, wird
                finanziell vorstellbar, je eingehender man sich mit bestehenden
                Ansätzen und Berechnungsmodellen aus der
                bedingungslosen-Grundeinkommen-Szene befasst. Es lässt sich
                feststellen, dass es sich bei den Ausgaben zunächst einmal um
                Bruttokosten handelt. Ein großer Teil fließt zurück an den
                Staat, über Einkommenssteuern, Sozialabgaben und auch
                Mehrwertsteuer. Tatsächliche Mehrkosten könnten über
                Steuererhöhungen wieder reinkommen, denkbar wäre auch eine
                Finanztransaktionssteuer, welche die Hochfinanz heranzieht. Für
                die Zeit der Krisenbewältigung könnte der Steuerfreibetrag
                gekürzt werden, über einen Soli auf die Einkommen oder über eine
                erhöhte Unternehmenssteuer eingezogen werden. Da die Unternehmen
                bereits von dem Corona-Krisenpaket, wie beispielsweise bsp.
                Kurzarbeitergeld profitieren, könnte dieses Geld zu einem
                späteren Zeitpunkt wieder in die Staatskasse zurückfließen. Für
                welches Konzept der Finanzierung man sich entscheidet, bleibt
                allerdings eine Frage der politischen Zielsetzung.
              </p>
              <p>
                <strong>Und die konkrete Umsetzung?</strong>
                <br />
                Die Anforderungen an die Auszahlung eines Basiseinkommen
                innerhalb der aktuellen Krisensituation sind hoch: Das Geld muss
                so unbürokratisch und schnell wie möglich genau zu den Personen,
                die Anspruch darauf haben. Gleichzeitig muss sichergestellt
                werden, dass jede Person (beispielsweise auch ohne
                Bankverbindung) einen Zugang zum Basiseinkommen hat und
                gleichzeitig Mehrfachauszahlungen und Betrug verhindert werden.
                Um diesen Anforderungen gerecht zu werden und unsere Behörden
                dabei nicht zu überlasten, ist es sinnvoll, die bestehenden
                technischen Infrastrukturen der Finanzämter, Sozialreferate und
                Arbeitsagenturen zu nutzen: Über die individuelle
                Steueridentifikationsnummer jeder:jedes einzelnen kann die
                eindeutige Ermittlung aller in Deutschland lebender Personen mit
                Anspruch auf Basiseinkommen erfolgen. Ist dem Staat eine IBAN zu
                der Steuer-ID bekannt, so wird das Basiseinkommen automatisch
                auf das dort registrierte Konto überwiesen. Für alle Personen,
                die kein Konto besitzen, kann das Geld über eine sogenannte
                Geldkarte oder Barauszahlung bei der zuständigen Behörde sowie
                eine Legitimation mittels Personalausweis bzw.
                Steueridentifikation eingeholt werden. Bei der Ermittlung des
                Anspruchs auf Basiseinkommen und der Legitimation werden
                personenbezogene Daten erhoben, die von der jeweiligen Behörde
                gemäß DSGVO zum Transport und zur Ablage verschlüsselt werden.
                Hierunter fallen die Steueridentifikationsnummer, das
                Geburtsdatum, die Legitimation für Familienmitglieder vor Ort
                bei der Behörde und Personalausweisdaten.
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
              <h2>Und was kann ich dazu beitragen?</h2>
              <p>
                Unterstütze alle Petitionen, die sich derzeit in der Prüfung im
                Ausschuss des Bundestages befinden und auch die privat
                organisierten Petitionen, wie beispielsweise die von Tonia Merz
                auf change.org
              </p>
              <ul>
                <li>
                  Petition{' '}
                  <ExternalLink href="http://chng.it/NWhN2bCwSy">
                    Mit dem bedingungslosen Grundeinkommen durch die Coronakrise
                  </ExternalLink>{' '}
                  von Tonia Merz via change.org
                </li>
                <li>
                  Bundestagspetition 108191{' '}
                  <ExternalLink href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html">
                    Einführung eines Bedingungslosen Grundeinkommens
                  </ExternalLink>{' '}
                  vom 14.03.2020
                </li>
              </ul>
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

  img {
    width: 100%;
  }
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
