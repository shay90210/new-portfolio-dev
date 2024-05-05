import React from 'react';
import { DiPython, DiJsBadge, DiDatabase } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Below are all the skills I know based on personal projects and courses.
    </SectionText>
    <List>
      <ListItem>
        <DiJsBadge size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            TypeScript | JavaScript | HTML | CSS | React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Python | Ruby
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
