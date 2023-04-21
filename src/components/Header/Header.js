import Link from 'next/link'; //This works just as React Links work.
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

// The below is where the style-components is taking into affect import preset components and styles already created in the HeaderStyles.js. These are then placed into the const header component below.
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

//The below is essentially my Navbar at the top which will list my projects, technolies used, and my about page
const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
      <a style={{ display: "flex", alignItems: "center", color: "white"}}>
      <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <li> {/* The below will link to the below section of my portfolio page smoothly and so on.. I will look to create page components in the end so that everything seems to  have its own page */}
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/markruth2nd"> 
      <AiFillGithub /> {/* This will give me the Github Icon which will link to the link I have provided in the href */}
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mark-baldry-144725270/"> 
      <AiFillLinkedin /> {/* This will give me the LinkedIn Icon which will link to the link I have provided in the href */}
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/"> 
      <AiFillInstagram /> {/* This will give me the Instagram Icon which will link to the link I have provided in the href */}
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
