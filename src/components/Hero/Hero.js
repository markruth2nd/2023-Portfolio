import React from 'react';
//The below are my styled-components, some in HeroStyles.js, some in styles Folder
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center> {/* main and center props have been applied her */}
        Hello, This is <br />
        Mark Baldry's Portfolio
      </SectionTitle>
      <SectionText>
      A passionate and lively web developer, driven to create exceptional digital experiences through innovative and dynamic designs.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;