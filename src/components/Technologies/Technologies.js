import React from 'react';
import { DiPython, DiJsBadge, DiDatabase, DiGithub, DiGit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { AiFillSlackCircle } from 'react-icons/ai';

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
            JavaScript | HTML | CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Ruby | Data structures | Algorithms
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillSlackCircle size='3rem' />
        <ListContainer>
          <ListTitle>Soft Skills</ListTitle>
          <ListParagraph>
            Problem-Solver | Analytical | Communicator | Team Player | Lifelong Learner
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size='3rem' />
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Git | GitHub | Node Package Manager | Testing
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
