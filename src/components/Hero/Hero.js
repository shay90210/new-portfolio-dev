import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Shannon Bentley, <br />
        your neighborhood <i>software engineer</i>
      </SectionTitle>
      <SectionText>
        theGlamTechie is my portfolio that showcases my programming skills and inspires
        transitioners to pursue tech careers. Each project represents my ability to learn
        and apply new technologies, demonstrating my dedication to software engineering.
        I am committed to ongoing learning and contributing to the tech community.
      </SectionText>
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/1zoYjCT-DwCfqZ6cZH2STGhL-uGPWHAlBu6rrS4LBBWA/edit'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;