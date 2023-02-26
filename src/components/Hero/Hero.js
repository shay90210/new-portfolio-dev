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
          I created theGlamTechie to showcase my proficiency in programming languages and
          to inspire other beginners to pursue a career in tech. Through my portfolio, I
          hope to impress future employers with my skills and dedication to software
          engineering. Each project is a testament to my ability to learn and apply new
          technologies. I am constantly seeking new opportunities to expand my knowledge
          and contribute to the tech community.
      </SectionText>
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/1zoYjCT-DwCfqZ6cZH2STGhL-uGPWHAlBu6rrS4LBBWA/edit'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;