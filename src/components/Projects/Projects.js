import React from 'react';

//Below are the styled-componenents imported
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {[{
        title: 'Project 1',
        description: "This is the description of the project"}, {
          title: 'Project 1',
        description: "This is the description of the project"}, {
          title: "Project 1",
        description: "This is the description of the project"}, {
          title: "Project 1",
        description: "This is the description of the project"}, {
          title: "Project 1",
        description: "This is the description of the project"
      }].map((project) => (
        <div>
          {project.title}
          <br />
          {project.description}
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;