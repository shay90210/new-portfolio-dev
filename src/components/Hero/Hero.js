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
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/1zoYjCT-DwCfqZ6cZH2STGhL-uGPWHAlBu6rrS4LBBWA/edit'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;