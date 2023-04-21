import Link from 'next/link'; //This works just as React Links work.
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

// The below is where the style-components is taking into affect import preset components and styles already created in the HeaderStyles.js. These are then placed into the const header component below.
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignItems: "center", color: "white"}}>
      <DiCssdeck size="3rem" /> <span>Portfolio</span>
      </a>
      </Link>
    </Div1>
  </Container>
);

export default Header;
