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
      <Button onClick={() => window.location = 'file:///C:/Users/bentl/OneDrive/Documents/BreeZip/ShannonBentley-Resume%20(1)%20conv.html'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;