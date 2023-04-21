import React from 'react';
//The below are my styled-components, some in HeroStyles.js, some in styles Folder
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

//not using props..
const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center> {/* main and center props have been applied her */}
        Hello, This is <br />
        Mark Baldry's Portfolio
      </SectionTitle>
      <SectionText>
      A passionate and lively web developer, driven to create exceptional digital experiences through innovative and dynamic designs.
      </SectionText>
      {/* Button add which currently take user to github page, this can and will be updated in time.. */}
      <Button onClick={() => window.location = 'https://github.com/markruth2nd'}>Learn More..</Button>
    </LeftSection>
  </Section>
);

export default Hero;