import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider /> <br />
    <SectionTitle>Technologies used so far..</SectionTitle>
    <SectionText> I have worked with the following:</SectionText>
      <List>
        <ListItem>
          {/* The below is the React icon in React Icons - see docs for the list of available icons */}
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with: <br />
              ReactJS <br />
              JavaScript <br />
              VueJS <br />
              CSS <br />
              Bootstrap <br />
              JQuery<br />
              HTML <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with: <br />
              Node & Databases <br />
              API's <br />
              Express <br />
              some C#
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with: <br />
              Figma <br />
              Bootstrap <br />
              Adobe Creative Cloud
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
