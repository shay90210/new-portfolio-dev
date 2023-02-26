import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Shannon Bentley, <br /> 
        your friendly <i>software engineer</i>
      </SectionTitle>
      <SectionText>
          I created theGlamTechie to showcase my proficiency in JavaScript and React and
          to inspire other beginners to pursue a career in tech. As a self-taught software
          engineer, I understand the challenges that come with starting from scratch.
          That's why I want to share my passion for learning and building functional apps
          to help others gain the confidence they need to succeed in this industry.
      </SectionText>
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/1zoYjCT-DwCfqZ6cZH2STGhL-uGPWHAlBu6rrS4LBBWA/edit'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;