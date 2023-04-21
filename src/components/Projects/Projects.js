import React from 'react';

//Below are the styled-componenents imported
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsInfo = [{
  title: 'Project 1',
  description: "This is the description of the project"}, {
    title: 'Project 2',
  description: "This is the description of the project"}, {
    title: "Project 3",
  description: "This is the description of the project"}, {
    title: "Project 4",
  description: "This is the description of the project"}, {
    title: "Project 5",
  description: "This is the description of the project"
}];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectsInfo.map((project) => (
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