import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Shannon Bentley, <br /> 
        your friendly <i>web developer</i>
      </SectionTitle>
      <SectionText>
        The purpose of theGlamTechie is to present my learned skills of JavaScript and React to employers and to educate newbies like me on how to get into tech by spreading my joys of learning technology and building functional apps.
      </SectionText>
      <Button onClick={() => window.location = '/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;